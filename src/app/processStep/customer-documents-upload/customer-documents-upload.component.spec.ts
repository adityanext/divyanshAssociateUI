import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDocumentsUploadComponent } from './customer-documents-upload.component';

describe('CustomerDocumentsUploadComponent', () => {
  let component: CustomerDocumentsUploadComponent;
  let fixture: ComponentFixture<CustomerDocumentsUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerDocumentsUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDocumentsUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
