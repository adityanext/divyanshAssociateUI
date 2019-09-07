import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StampDutyComponent } from './stamp-duty.component';

describe('StampDutyComponent', () => {
  let component: StampDutyComponent;
  let fixture: ComponentFixture<StampDutyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StampDutyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StampDutyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
