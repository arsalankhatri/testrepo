import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CcrestrictcallComponent } from './ccrestrictcall.component';

describe('CcrestrictcallComponent', () => {
  let component: CcrestrictcallComponent;
  let fixture: ComponentFixture<CcrestrictcallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CcrestrictcallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CcrestrictcallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
