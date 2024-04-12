import { Component } from '@angular/core';

interface Patient {
  id: number;
  name: string;
  age: number;
  medicalRecords: string;
}

@Component({
  selector: 'app-patient-records',
  templateUrl: './patient-records.component.html',
  styleUrls: ['./patient-records.component.css']
})
export class PatientRecordsComponent {
  patients: Patient[] = [
    { id: 1, name: "Wioo", age: 21, medicalRecords: "Way too funny." },
    { id: 2, name: "Doudi", age: 21, medicalRecords: "Way too cute." },
    { id: 3, name: "Red Velvet", age: 21, medicalRecords: "Way too nice." },
    { id: 4, name: "Mery", age: 21, medicalRecords: "Way too sweet." }
  ];

  selectedPatient: Patient | null = null;

  displayPatientDetails(id: number) {
    this.selectedPatient = this.patients.find(p => p.id === id) || null;
  }
}