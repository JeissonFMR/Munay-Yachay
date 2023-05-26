import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisfrazIndividualComponent } from './disfraz-individual.component';

describe('DisfrazIndividualComponent', () => {
  let component: DisfrazIndividualComponent;
  let fixture: ComponentFixture<DisfrazIndividualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisfrazIndividualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisfrazIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
