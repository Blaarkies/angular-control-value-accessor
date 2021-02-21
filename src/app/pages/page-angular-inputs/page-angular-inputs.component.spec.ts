import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAngularInputsComponent } from './page-angular-inputs.component';

describe('PageAngularInputsComponent', () => {
  let component: PageAngularInputsComponent;
  let fixture: ComponentFixture<PageAngularInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAngularInputsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAngularInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
