import { ChangeDetectorRef, Component, ElementRef, forwardRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { LabeledOption } from '../../common/domain/labeled.option';
import { BasicValueAccessor } from '../../common/domain/basic-value-accessor';
import { InputComponent } from '../input/input.component';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AutocompleteComponent),
    multi: true,
  }],
})
export class AutocompleteComponent extends BasicValueAccessor implements OnInit {

  @Input() label: string;

  @Input() set options(value: LabeledOption<any>[]) {
    this._options = this.filteredOptions = value;
  }

  @ViewChild(InputComponent, {static: true}) inputComponent: InputComponent;

  private _options: LabeledOption<any>[];
  filteredOptions: LabeledOption<any>[];

  constructor(private _changeDetectorRef: ChangeDetectorRef, private _self: ElementRef) {
    super();
  }

  ngOnInit() {
    this.inputComponent.registerOnChange(search => {
      this.filteredOptions = this._options.sortByRelevance(o => o.label.relevanceScore(search));
      this.writeValue(null);
    });
  }

  selectOption(option: LabeledOption<any>) {
    this.writeValue(option.value);

    this.inputComponent.writeValue(option.label);
  }

  writeValue(value: any) {
    this.value = value;
    this.onChange && this.onChange(value);
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this._self.nativeElement.disabled = isDisabled;
    this.inputComponent.setDisabledState(isDisabled);
    this._changeDetectorRef.markForCheck();
  }

}
