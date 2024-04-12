import { Component } from '@angular/core';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent {
  appointments: any[];

  constructor() {
    this.appointments = [
      { patientName: 'Wioo', time: '09:00 AM', type: 'Regular Checkup', status: 'Confirmed' },
      { patientName: 'Red Velvet', time: '10:30 AM', type: 'Consultation', status: 'Pending' },
      { patientName: 'Mery', time: '02:00 PM', type: 'Consultation', status: 'Confirmed' },
      { patientName: 'Pinky', time: '02:30 PM', type: 'Treatment', status: 'Canceled' },
      { patientName: 'Doudi', time: '03:00 PM', type: 'Regular Checkup', status: 'Pending' },
      { patientName: 'Tornade', time: '03:30 PM', type: 'Consultation', status: 'Done' },
    ];
  }
}
