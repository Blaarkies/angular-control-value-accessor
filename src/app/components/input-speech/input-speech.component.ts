import { ChangeDetectorRef, Component, ElementRef, forwardRef, Input, NgZone, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BasicValueAccessor } from '../../common/domain/basic-value-accessor';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Status } from '../../common/domain/status';
import { Subject, timer } from 'rxjs';
import { startWith, takeUntil } from 'rxjs/operators';

declare var webkitSpeechRecognition: any;

@Component({
  selector: 'app-input-speech',
  templateUrl: './input-speech.component.html',
  styleUrls: ['./input-speech.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputSpeechComponent),
    multi: true,
  }],
})
export class InputSpeechComponent extends BasicValueAccessor implements OnInit, OnDestroy {

  @Input() label: string;

  @ViewChild(HTMLButtonElement) buttonRef: ElementRef<HTMLButtonElement>;

  status = new Status();
  confidence: number;

  private recognition: SpeechRecognition;
  private unsubscribeSpeechResult$ = new Subject();

  constructor(private _changeDetectorRef: ChangeDetectorRef, private _ngZone: NgZone) {
    super();

    this.setupSpeechRecognition();
  }

  writeValue(value: any) {
    this.value = value;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.buttonRef.nativeElement.disabled = isDisabled;
  }

  userInputChange(value: string) {
    this.writeValue(value);
    this._ngZone.run(_ => this.onChange && this.onChange(value));
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.unsubscribeSpeechResult$.next();
    this.unsubscribeSpeechResult$.complete();
  }

  startInput() {
    this.unsubscribeSpeechResult$.next();
    timer(5000)
      .pipe(
        startWith(null as void),
        takeUntil(this.unsubscribeSpeechResult$))
      .subscribe(_ => this.recognition.abort());

    this.recognition.start();
  }

  private setupSpeechRecognition() {
    this.recognition = new webkitSpeechRecognition();

    this.recognition.onstart = _ => {
      this.status.setPending();
      this._changeDetectorRef.detectChanges();
    };

    this.recognition.onspeechend = _ => {
      this.recognition.stop();
    };

    this.recognition.onend = _ => {
      this.status.setIdle();
      this._changeDetectorRef.detectChanges();
    };

    this.recognition.onresult = event => {
      const transcript = event.results[0][0].transcript;
      const confidence = event.results[0][0].confidence;

      this.userInputChange(transcript);
      this.confidence = confidence;
      this.status.setSuccess();
      this._changeDetectorRef.detectChanges();
    };

    this.recognition.onspeechstart = _ => {
      this.unsubscribeSpeechResult$.next();
    };
  }

}
