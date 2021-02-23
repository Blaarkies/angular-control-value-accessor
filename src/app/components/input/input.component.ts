import { Component, ElementRef, forwardRef, Input, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BasicValueAccessor } from '../../common/domain/basic-value-accessor';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputComponent),
    multi: true,
  }],
})
export class InputComponent extends BasicValueAccessor {

  @Input() label: string;

  @ViewChild('input', {static: true}) inputRef: ElementRef<HTMLInputElement>;

  isActive: boolean;

  constructor() {
    super();
  }

  writeValue(value: any) {
    this.inputRef.nativeElement.value = value;
    this.value = value;
  }

  registerOnChange(fn: (value: any) => any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => any) {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.inputRef.nativeElement.disabled = isDisabled;
  }

  userInputChange(value: string) {
    this.writeValue(value);
    this.onChange && this.onChange(value);
  }

}
