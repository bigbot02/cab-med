import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  toggleFields(event: Event): void {
    const profession = (event.target as HTMLSelectElement).value;
    const doctorFieldsElement = document.getElementById('doctorFields');
    const patientFieldsElement = document.getElementById('patientFields');

    if (doctorFieldsElement && patientFieldsElement) {
      if (profession === 'doctor') {
        doctorFieldsElement.classList.remove('hidden');
        patientFieldsElement.classList.add('hidden');
      } else if (profession === 'patient') {
        doctorFieldsElement.classList.add('hidden');
        patientFieldsElement.classList.remove('hidden');
      } else {
        doctorFieldsElement.classList.add('hidden');
        patientFieldsElement.classList.add('hidden');
      }
    }
  }
}
