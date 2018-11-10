import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { RestClient } from './Mocky/rest.client';
import { SignInRegisterComponent } from './sign-in-register/sign-in-register.component';
import { HeaderComponent } from './header/header.component';
import { LoginFormComponent } from './login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    SignInRegisterComponent,
    HeaderComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [RestClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
