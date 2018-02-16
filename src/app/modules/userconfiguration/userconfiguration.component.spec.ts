import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserconfigurationComponent } from './userconfiguration.component';

describe('UserconfigurationComponent', () => {
  let component: UserconfigurationComponent;
  let fixture: ComponentFixture<UserconfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserconfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserconfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
