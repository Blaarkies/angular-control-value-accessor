import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Tree } from '../../common/domain/tree';
import { LabeledOption } from '../../common/domain/labeled.option';

@Component({
  selector: 'app-page-autocomplete',
  templateUrl: './page-autocomplete.component.html',
  styleUrls: ['./page-autocomplete.component.css']
})
export class PageAutocompleteComponent implements OnInit {

  badControl = new FormControl();
  trees = LabeledOption.fromTree(Tree.someTrees).shuffle();
  goodControl = new FormControl();

  constructor() { }

  ngOnInit(): void {
  }

}
