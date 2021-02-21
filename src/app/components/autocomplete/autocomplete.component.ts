import { ChangeDetectorRef, Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { LabeledOption } from '../../common/domain/labeled.option';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AutocompleteComponent),
    multi: true
  }],
})
export class AutocompleteComponent implements OnInit, ControlValueAccessor {

  @Input() label: FormControl;

  private _options: LabeledOption<any>[];
  @Input() set options(value: LabeledOption<any>[]) {
    this._options = this.filteredOptions = value;
  }

  filteredOptions: LabeledOption<any>[];
  controlInput = new FormControl();

  private value: any;
  private _onChange: (value: any) => void;
  private _onTouched: any;
  private disabled: boolean;

  constructor(private _changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit() {
  }

  selectOption(option: LabeledOption<any>) {
    this.writeValue(option);
  }

  writeValue(obj: any) {
    this.value = obj;
  }

  registerOnChange(fn: (value: any) => void) {
    this._onChange = fn;
  }

  registerOnTouched(fn: any) {
    this._onTouched = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
    this._changeDetectorRef.markForCheck();
  }

}
