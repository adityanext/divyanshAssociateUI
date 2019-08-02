import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerReferenceDetailsComponent } from './customer-reference-details.component';

describe('CustomerReferenceDetailsComponent', () => {
  let component: CustomerReferenceDetailsComponent;
  let fixture: ComponentFixture<CustomerReferenceDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerReferenceDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerReferenceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
