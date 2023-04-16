import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjektierungComponent } from './projektierung.component';

describe('ProjektierungComponent', () => {
  let component: ProjektierungComponent;
  let fixture: ComponentFixture<ProjektierungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjektierungComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjektierungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
