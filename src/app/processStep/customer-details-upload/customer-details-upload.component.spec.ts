import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDetailsUploadComponent } from './customer-details-upload.component';

describe('CustomerDetailsUploadComponent', () => {
  let component: CustomerDetailsUploadComponent;
  let fixture: ComponentFixture<CustomerDetailsUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerDetailsUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDetailsUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
