import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { PatientRecordsComponent } from './patient-records/patient-records.component';
import { PaymentComponent } from './payment/payment.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'home', component: WelcomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'appointment', component: AppointmentComponent },
  { path: 'patient-records', component: PatientRecordsComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'analytics', component: AnalyticsComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
