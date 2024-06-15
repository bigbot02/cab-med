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
import { HomeComponent } from './home/home.component';
import { CalendarComponent } from './calendar/calendar.component';
import { LayoutComponent } from './layout/layout.component';
import { PrescriptionComponent } from './prescription/prescription.component';
import { GuideComponent } from './guide/guide.component';
import { TasksComponent } from './tasks/tasks.component';
import { RendezvousComponent } from './rendezvous/rendezvous.component';
import { PatientsComponent } from './patients/patients.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'appointment', component: AppointmentComponent },
  { path: 'patient-records', component: PatientRecordsComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'analytics', component: AnalyticsComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'layout', component: LayoutComponent },
  { path: 'prescription', component: PrescriptionComponent },
  { path: 'guide', component: GuideComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'rendezvous', component: RendezvousComponent },
  { path: 'patients', component: PatientsComponent },
  { path: 'forgotpassword', component: ForgotpasswordComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
