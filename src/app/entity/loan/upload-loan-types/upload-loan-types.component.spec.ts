import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadLoanTypesComponent } from './upload-loan-types.component';

describe('UploadLoanTypesComponent', () => {
  let component: UploadLoanTypesComponent;
  let fixture: ComponentFixture<UploadLoanTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadLoanTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadLoanTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
