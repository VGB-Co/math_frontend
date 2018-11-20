import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogRegFormsComponent } from './log-reg-forms.component';

describe('LogRegFormsComponent', () => {
  let component: LogRegFormsComponent;
  let fixture: ComponentFixture<LogRegFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogRegFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogRegFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
