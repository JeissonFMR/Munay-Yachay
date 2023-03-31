import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavShortComponent } from './sidenav-short.component';

describe('SidenavShortComponent', () => {
  let component: SidenavShortComponent;
  let fixture: ComponentFixture<SidenavShortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavShortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavShortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
