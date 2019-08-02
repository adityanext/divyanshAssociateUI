import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadDailyDataComponent } from './upload-daily-data.component';

describe('UploadDailyDataComponent', () => {
  let component: UploadDailyDataComponent;
  let fixture: ComponentFixture<UploadDailyDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadDailyDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadDailyDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
