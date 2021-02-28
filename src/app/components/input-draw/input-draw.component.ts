import { AfterViewInit, Component, ElementRef, forwardRef, Input, ViewChild } from '@angular/core';
import { BasicValueAccessor } from '../../common/domain/basic-value-accessor';
import { fromEvent } from 'rxjs';
import { filter, finalize, pairwise, skip, switchMap, takeUntil, takeWhile } from 'rxjs/operators';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Position } from '../../common/domain/position';

@Component({
  selector: 'app-input-draw',
  templateUrl: './input-draw.component.html',
  styleUrls: ['./input-draw.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputDrawComponent),
    multi: true,
  }],
})
export class InputDrawComponent extends BasicValueAccessor implements AfterViewInit {

  @Input() label: string;

  @ViewChild('canvasRef', {static: true}) canvasRef: ElementRef<HTMLCanvasElement>;

  private cx: CanvasRenderingContext2D;

  constructor() {
    super();
  }

  writeValue(value: any) {
    this.value = value;
  }

  registerOnChange(fn: (value: any) => any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => any) {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  userInputChange() {
    const [width, height] = this.cx.canvas.let(it => ([it.width, it.height]));
    const data = this.cx.getImageData(0, 0, width, height);
    this.writeValue(data);
    this.onChange && this.onChange(data);
  }

  public ngAfterViewInit() {
    const canvas = this.canvasRef.nativeElement;
    this.cx = canvas.getContext('2d');

    // canvas.width = this.width;
    // canvas.height = this.height;

    this.cx.lineWidth = 3;
    this.cx.lineCap = 'round';
    this.cx.strokeStyle = '#000';

    this.captureEvents(canvas);
  }

  private captureEvents(canvas: HTMLCanvasElement) {
    fromEvent(canvas, 'mousedown')
      .pipe(
        switchMap(_ => fromEvent(canvas, 'mousemove').pipe(
          takeWhile(_ => !this.disabled),
          finalize(() => this.userInputChange()),
          takeUntil(fromEvent(canvas, 'mouseup')),
          takeUntil(fromEvent(canvas, 'mouseleave')),
          pairwise(),
          skip(1),
        )))
      .subscribe(([last, now]: [MouseEvent, MouseEvent]) => {
        const rect = canvas.getBoundingClientRect();

        const prevPos = Position.fromMouseEvent(last, rect);
        const currentPos = Position.fromMouseEvent(now, rect);

        this.drawOnCanvas(prevPos, currentPos);
      });
  }

  private drawOnCanvas(last: Position, now: Position) {
    if (!this.cx) {
      return;
    }

    this.cx.beginPath();

    this.cx.moveTo(last.x, last.y);
    this.cx.lineTo(now.x, now.y);
    this.cx.stroke();

    this.cx.closePath();
  }

}
