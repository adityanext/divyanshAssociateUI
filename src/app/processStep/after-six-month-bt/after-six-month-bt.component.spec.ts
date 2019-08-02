import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterSixMonthBTComponent } from './after-six-month-bt.component';

describe('AfterSixMonthBTComponent', () => {
  let component: AfterSixMonthBTComponent;
  let fixture: ComponentFixture<AfterSixMonthBTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfterSixMonthBTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterSixMonthBTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
