import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LabeledOption } from '../../common/domain/labeled.option';

@Component({
  selector: 'app-autocomplete-monkey-telephone',
  templateUrl: './autocomplete-monkey-telephone.component.html',
  styleUrls: ['./autocomplete-monkey-telephone.component.css'],
})
export class AutocompleteMonkeyTelephoneComponent {

  @Input() label: string;

  _control: AbstractControl;
  @Input() set control(newControl: AbstractControl) {
    this._control = newControl;
    this.controlInput.setValidators(newControl.validator);
    if (newControl.touched) {
      this.controlInput.markAllAsTouched();
    }

    this.unsubscribeValueChanges$.next();
    this.controlInput.valueChanges
      .pipe(takeUntil(this.unsubscribeValueChanges$))
      .subscribe(search =>
        this.filteredOptions = this._options.filter(o => o.label.fuzzyMatch(search)));
  }

  private _options: LabeledOption<any>[];
  @Input() set options(value: LabeledOption<any>[]) {
    this._options = this.filteredOptions = value;
  }

  filteredOptions: LabeledOption<any>[];
  controlInput = new FormControl();
  unsubscribeValueChanges$ = new Subject();

  ngOnDestroy(): void {
    this.unsubscribeValueChanges$.next();
    this.unsubscribeValueChanges$.complete();
  }

  selectOption(option: LabeledOption<any>) {
    this._control.setValue(option.value);
    this.controlInput.setValue(option.label);
  }
}
