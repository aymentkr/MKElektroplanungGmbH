import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeratungComponent } from './beratung.component';

describe('BeratungComponent', () => {
  let component: BeratungComponent;
  let fixture: ComponentFixture<BeratungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeratungComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeratungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
