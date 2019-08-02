import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BanksDetailComponent } from './banks-detail.component';

describe('BanksDetailComponent', () => {
  let component: BanksDetailComponent;
  let fixture: ComponentFixture<BanksDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BanksDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BanksDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
