import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { RestClient } from './Mocky/rest.client';
import { SignInRegisterComponent } from './sign-in-register/sign-in-register.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    SignInRegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [RestClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
