import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CcmappinglistComponent } from './ccmappinglist.component';

describe('CcmappinglistComponent', () => {
  let component: CcmappinglistComponent;
  let fixture: ComponentFixture<CcmappinglistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CcmappinglistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CcmappinglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
