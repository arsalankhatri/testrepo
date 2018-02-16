import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CcmappingComponent } from './ccmapping.component';

describe('CcmappingComponent', () => {
  let component: CcmappingComponent;
  let fixture: ComponentFixture<CcmappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CcmappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CcmappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
