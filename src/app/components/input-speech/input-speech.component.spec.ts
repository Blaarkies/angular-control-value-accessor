import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSpeechComponent } from './input-speech.component';

describe('InputSpeechComponent', () => {
  let component: InputSpeechComponent;
  let fixture: ComponentFixture<InputSpeechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputSpeechComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputSpeechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
