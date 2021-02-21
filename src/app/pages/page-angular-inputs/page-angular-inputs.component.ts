import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-page-angular-inputs',
  templateUrl: './page-angular-inputs.component.html',
  styleUrls: ['./page-angular-inputs.component.css'],
})
export class PageAngularInputsComponent {

  myEmail: string;
  words = ['planets', 'walk', 'flow', 'ship', 'work', 'hair', 'deutschland', 'space', 'station', 'star', 'corn', 'powder'];
  myEmailControl = new FormControl();

  randomizeMyEmail() {
    this.myEmail = this.getRandomEmailString();
  }

  private getRandomEmailString(): string {
    const shuffledWords = this.words.shuffle();
    return `${shuffledWords[0]}@${shuffledWords[1]}.${shuffledWords[2].slice(-3)}`;
  }

  randomizeMyEmailControl() {
    this.myEmailControl.setValue(this.getRandomEmailString());
  }
}
