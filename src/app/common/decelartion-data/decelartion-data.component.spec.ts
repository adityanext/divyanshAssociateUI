import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecelartionDataComponent } from './decelartion-data.component';

describe('DecelartionDataComponent', () => {
  let component: DecelartionDataComponent;
  let fixture: ComponentFixture<DecelartionDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecelartionDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecelartionDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
