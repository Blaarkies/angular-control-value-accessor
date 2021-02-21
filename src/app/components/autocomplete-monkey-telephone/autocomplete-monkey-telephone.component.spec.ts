import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteMonkeyTelephoneComponent } from './autocomplete-monkey-telephone.component';

describe('AutocompleteMonkeyTelephoneComponent', () => {
  let component: AutocompleteMonkeyTelephoneComponent;
  let fixture: ComponentFixture<AutocompleteMonkeyTelephoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutocompleteMonkeyTelephoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteMonkeyTelephoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
