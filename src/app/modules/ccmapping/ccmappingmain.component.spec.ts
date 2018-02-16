import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CcmappingmainComponent } from './ccmappingmain.component';

describe('CcmappingmainComponent', () => {
  let component: CcmappingmainComponent;
  let fixture: ComponentFixture<CcmappingmainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CcmappingmainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CcmappingmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
