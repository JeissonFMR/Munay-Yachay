import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparzaComponent } from './comparza.component';

describe('ComparzaComponent', () => {
  let component: ComparzaComponent;
  let fixture: ComponentFixture<ComparzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComparzaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
