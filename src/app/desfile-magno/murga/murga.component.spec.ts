import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MurgaComponent } from './murga.component';

describe('MurgaComponent', () => {
  let component: MurgaComponent;
  let fixture: ComponentFixture<MurgaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MurgaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MurgaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
