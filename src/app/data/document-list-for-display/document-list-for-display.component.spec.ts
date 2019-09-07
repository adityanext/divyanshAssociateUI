import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentListForDisplayComponent } from './document-list-for-display.component';

describe('DocumentListForDisplayComponent', () => {
  let component: DocumentListForDisplayComponent;
  let fixture: ComponentFixture<DocumentListForDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentListForDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentListForDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
