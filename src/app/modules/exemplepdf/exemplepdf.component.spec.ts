import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemplepdfComponent } from './exemplepdf.component';

describe('ExemplepdfComponent', () => {
  let component: ExemplepdfComponent;
  let fixture: ComponentFixture<ExemplepdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExemplepdfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExemplepdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
