import { NgModule, NO_ERRORS_SCHEMA, isDevMode } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TestDirective } from './directives/test.directive';
import { ServiceWorkerModule, SwRegistrationOptions } from '@angular/service-worker'
import { environment } from 'src/environments/environment';
import { NgToastModule } from 'ng-angular-popup';
import { TokenInterceptInterceptor } from './interceptors/token-intercept.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    TestDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // ServiceWorkerModule.register('ngsw-worker.js', {
    //   enabled: !environment.production,
    //   registrationStrategy: 'registerImmediately'
    // }),
    NgToastModule
  ],
  exports:[
    TestDirective
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptInterceptor,
      multi: true
    }
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
