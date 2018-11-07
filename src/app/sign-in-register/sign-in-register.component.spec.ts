import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInRegisterComponent } from './sign-in-register.component';

describe('SignInRegisterComponent', () => {
  let component: SignInRegisterComponent;
  let fixture: ComponentFixture<SignInRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignInRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
