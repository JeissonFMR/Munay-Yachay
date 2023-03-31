import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BienvenidaMagnoComponent } from './bienvenida-magno.component';

describe('BienvenidaMagnoComponent', () => {
  let component: BienvenidaMagnoComponent;
  let fixture: ComponentFixture<BienvenidaMagnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BienvenidaMagnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BienvenidaMagnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
