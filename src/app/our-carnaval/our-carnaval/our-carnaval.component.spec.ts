import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurCarnavalComponent } from './our-carnaval.component';

describe('OurCarnavalComponent', () => {
  let component: OurCarnavalComponent;
  let fixture: ComponentFixture<OurCarnavalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurCarnavalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurCarnavalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
