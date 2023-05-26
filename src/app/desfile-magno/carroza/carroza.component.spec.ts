import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrozaComponent } from './carroza.component';

describe('CarrozaComponent', () => {
  let component: CarrozaComponent;
  let fixture: ComponentFixture<CarrozaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrozaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrozaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
