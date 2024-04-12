import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { PatientRecordsComponent } from './patient-records/patient-records.component';
import { PaymentComponent } from './payment/payment.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    WelcomeComponent,
    AppointmentComponent,
    PatientRecordsComponent,
    PaymentComponent,
    AnalyticsComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
