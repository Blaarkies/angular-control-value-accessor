import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-native-inputs',
  templateUrl: './page-native-inputs.component.html',
  styleUrls: ['./page-native-inputs.component.css'],
})
export class PageNativeInputsComponent implements OnInit {

  emailValue: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  updateValueFromEmail() {
    this.emailValue = (document.getElementById('mail') as HTMLInputElement).value;
  }
}