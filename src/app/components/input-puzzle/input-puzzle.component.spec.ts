import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPuzzleComponent } from './input-puzzle.component';

describe('InputPuzzleComponent', () => {
  let component: InputPuzzleComponent;
  let fixture: ComponentFixture<InputPuzzleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputPuzzleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputPuzzleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
