import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CibilVerificationComponent } from './cibil-verification.component';

describe('CibilVerificationComponent', () => {
  let component: CibilVerificationComponent;
  let fixture: ComponentFixture<CibilVerificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CibilVerificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CibilVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
