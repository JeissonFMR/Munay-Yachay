import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentCantoALaTierraComponent } from './content-canto-ala-tierra.component';

describe('ContentCantoALaTierraComponent', () => {
  let component: ContentCantoALaTierraComponent;
  let fixture: ComponentFixture<ContentCantoALaTierraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentCantoALaTierraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentCantoALaTierraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
