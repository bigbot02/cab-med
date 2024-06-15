import { Component } from '@angular/core';
import { FormDataService } from '../form-data.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent {
  isEditMode = true;
  formData: any = {};

  constructor(private formDataService: FormDataService) { }

  onSubmit(form: any) {
    this.formDataService.setFormData(form.value);
    this.formData = this.formDataService.getFormData();
    this.isEditMode = false;
  }

  editForm() {
    this.isEditMode = true;
    this.formData = this.formDataService.getFormData();
  }
}
