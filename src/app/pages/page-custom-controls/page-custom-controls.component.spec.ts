import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCustomControlsComponent } from './page-custom-controls.component';

describe('PageCustomControlsComponent', () => {
  let component: PageCustomControlsComponent;
  let fixture: ComponentFixture<PageCustomControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCustomControlsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCustomControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
