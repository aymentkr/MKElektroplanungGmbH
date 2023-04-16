import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BauueberwachungComponent } from './bauueberwachung.component';

describe('BauueberwachungComponent', () => {
  let component: BauueberwachungComponent;
  let fixture: ComponentFixture<BauueberwachungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BauueberwachungComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BauueberwachungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
