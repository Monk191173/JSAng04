import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyphonebookComponent } from './myphonebook.component';

describe('MyphonebookComponent', () => {
  let component: MyphonebookComponent;
  let fixture: ComponentFixture<MyphonebookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyphonebookComponent]
    });
    fixture = TestBed.createComponent(MyphonebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
