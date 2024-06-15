import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  formData = {
    title: '',
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    cin: '',
    profession: '',
    licenseNumber: '',
    specialization: '',
    affiliation: '',
    experience: null,
    insuranceInfo: '',
    primaryPhysician: '',
    medicalHistory: '',
    city: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
    policy: false
  };

  constructor(private http: HttpClient) { }

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

  registerUser() {
    if (this.formData.password !== this.formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    this.http.post('http://localhost:8000/php/register.php', this.formData)
      .subscribe(
        (response) => {
          console.log('Registration successful', response);
          window.location.href = '/login';
        },
        (error) => {
          console.error('Registration failed', error);
        }
      );
  }
}
