import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAutocompleteComponent } from './page-autocomplete.component';

describe('PageAutocompleteComponent', () => {
  let component: PageAutocompleteComponent;
  let fixture: ComponentFixture<PageAutocompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAutocompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
