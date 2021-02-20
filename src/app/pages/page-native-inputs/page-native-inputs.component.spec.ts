import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNativeInputsComponent } from './page-native-inputs.component';

describe('PageNativeInputsComponent', () => {
  let component: PageNativeInputsComponent;
  let fixture: ComponentFixture<PageNativeInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNativeInputsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNativeInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
