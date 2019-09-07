import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosureMoveToBTComponent } from './closure-move-to-bt.component';

describe('ClosureMoveToBTComponent', () => {
  let component: ClosureMoveToBTComponent;
  let fixture: ComponentFixture<ClosureMoveToBTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClosureMoveToBTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosureMoveToBTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
