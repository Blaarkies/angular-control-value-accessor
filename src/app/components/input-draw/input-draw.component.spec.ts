import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDrawComponent } from './input-draw.component';

describe('InputDrawComponent', () => {
  let component: InputDrawComponent;
  let fixture: ComponentFixture<InputDrawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputDrawComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputDrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
