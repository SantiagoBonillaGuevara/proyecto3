import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosMedicosComponent } from './datos-medicos.component';

describe('DatosMedicosComponent', () => {
  let component: DatosMedicosComponent;
  let fixture: ComponentFixture<DatosMedicosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatosMedicosComponent]
    });
    fixture = TestBed.createComponent(DatosMedicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
