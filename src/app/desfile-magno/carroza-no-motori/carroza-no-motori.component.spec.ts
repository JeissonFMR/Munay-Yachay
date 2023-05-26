import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrozaNoMotoriComponent } from './carroza-no-motori.component';

describe('CarrozaNoMotoriComponent', () => {
  let component: CarrozaNoMotoriComponent;
  let fixture: ComponentFixture<CarrozaNoMotoriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrozaNoMotoriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrozaNoMotoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
