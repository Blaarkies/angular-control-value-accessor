import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-page-custom-controls',
  templateUrl: './page-custom-controls.component.html',
  styleUrls: ['./page-custom-controls.component.css'],
})
export class PageCustomControlsComponent implements OnInit {

  speechControl = new FormControl();
  drawControl = new FormControl();

  constructor() {
  }

  ngOnInit(): void {
  }

}
