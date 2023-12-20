import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ServiceWorkerModule, SwRegistrationOptions } from '@angular/service-worker'
import { environment } from 'src/environments/environment';
import { NgToastModule } from 'ng-angular-popup';
import { TokenInterceptInterceptor } from './interceptors/token-intercept.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FeaturesModule } from './features/features.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    // ServiceWorkerModule.register('ngsw-worker.js', {
    //   enabled: !environment.production,
    //   registrationStrategy: 'registerImmediately'
    // }),
    NgToastModule,
    FeaturesModule
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
