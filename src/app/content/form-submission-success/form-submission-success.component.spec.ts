import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSubmissionSuccessComponent } from './form-submission-success.component';

describe('FormSubmissionSuccessComponent', () => {
  let component: FormSubmissionSuccessComponent;
  let fixture: ComponentFixture<FormSubmissionSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSubmissionSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSubmissionSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
