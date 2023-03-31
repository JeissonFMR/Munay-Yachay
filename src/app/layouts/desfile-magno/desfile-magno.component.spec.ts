import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesfileMagnoComponent } from './desfile-magno.component';

describe('DesfileMagnoComponent', () => {
  let component: DesfileMagnoComponent;
  let fixture: ComponentFixture<DesfileMagnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesfileMagnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesfileMagnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
