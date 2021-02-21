import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputMonkeyTelephoneComponent } from './input-monkey-telephone.component';

describe('InputMonkeyTelephoneComponent', () => {
  let component: InputMonkeyTelephoneComponent;
  let fixture: ComponentFixture<InputMonkeyTelephoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputMonkeyTelephoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputMonkeyTelephoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
