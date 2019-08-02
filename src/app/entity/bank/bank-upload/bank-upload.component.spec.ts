import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankUploadComponent } from './bank-upload.component';

describe('BankUploadComponent', () => {
  let component: BankUploadComponent;
  let fixture: ComponentFixture<BankUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
