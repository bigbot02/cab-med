import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-patient-records',
  templateUrl: './patient-records.component.html',
  styleUrls: ['./patient-records.component.css']
})
export class PatientRecordsComponent {
  constructor(private router: Router) { }

  navigateToPatients() {
    this.router.navigate(['/patients']);
  }
}