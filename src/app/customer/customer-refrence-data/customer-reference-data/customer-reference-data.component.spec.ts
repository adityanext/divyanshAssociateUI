import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CustomerReferenceDataComponent } from "./customer-reference-data.component";

describe("CustomerReferenceDataComponent", () => {
  let component: CustomerReferenceDataComponent;
  let fixture: ComponentFixture<CustomerReferenceDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerReferenceDataComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerReferenceDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
