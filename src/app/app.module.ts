import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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
import { FormsModule } from '@angular/forms';
import { CalendarComponent } from './calendar/calendar.component';
import { LayoutComponent } from './layout/layout.component';
import { PrescriptionComponent } from './prescription/prescription.component';
import { GuideComponent } from './guide/guide.component';
import { TasksComponent } from './tasks/tasks.component';
import { RendezvousComponent } from './rendezvous/rendezvous.component';
import { PatientsComponent } from './patients/patients.component';
import { FormDataService } from './form-data.service';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';


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
    ProfileComponent,
    CalendarComponent,
    LayoutComponent,
    PrescriptionComponent,
    GuideComponent,
    TasksComponent,
    RendezvousComponent,
    PatientsComponent,
    ForgotpasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [FormDataService],
  bootstrap: [AppComponent],

})
export class AppModule { }
