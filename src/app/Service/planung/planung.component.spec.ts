import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanungComponent } from './planung.component';

describe('PlanungComponent', () => {
  let component: PlanungComponent;
  let fixture: ComponentFixture<PlanungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanungComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
