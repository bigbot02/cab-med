import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent {
  constructor(private router: Router) { }

  navigateToCalendar() {
    this.router.navigate(['/calendar']);
  }
}
