import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionCarnavalComponent } from './selection-carnaval.component';

describe('SelectionCarnavalComponent', () => {
  let component: SelectionCarnavalComponent;
  let fixture: ComponentFixture<SelectionCarnavalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectionCarnavalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionCarnavalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
