import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CantoTierraComponent } from './canto-tierra.component';

describe('CantoTierraComponent', () => {
  let component: CantoTierraComponent;
  let fixture: ComponentFixture<CantoTierraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CantoTierraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CantoTierraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
