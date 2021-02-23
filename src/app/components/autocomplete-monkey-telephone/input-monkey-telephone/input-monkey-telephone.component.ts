import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-input-monkey-telephone',
  templateUrl: './input-monkey-telephone.component.html',
  styleUrls: ['./input-monkey-telephone.component.css'],
})
export class InputMonkeyTelephoneComponent {

  @Input() label: string;
  @Input() control: AbstractControl;

  isActive: boolean;

}
