import { Component } from '@angular/core';
import { JobappService } from '../../services/jobapp.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-newposition',
  templateUrl: './newposition.component.html',
  styleUrl: './newposition.component.css'
})
export class NewpositionComponent {
  positionForm: FormGroup;
  name = new FormControl('',[Validators.required]);
  description = new FormControl('',[Validators.required]);

  constructor(
    private jobSrv: JobappService,
    private formBuilder: FormBuilder
  ) {
    this.positionForm = formBuilder.group({
      name: this.name,
      description: this.description
    })
   }

  ngOnInit(): void {}

  savePosition(): void {
    if (this.positionForm.valid) {
      const positionData = this.positionForm.value;
      this.jobSrv.savePosition(positionData);
      this.clearForm();
      this.navigateToHome();
    } else {
      alert('Por favor complete el formulario correctamente.');
    }
  }

  clearForm(): void {
    this.positionForm.reset();
  }

  navigateToHome() {
    this.clearForm();
    this.jobSrv.navigateToHome();
  }
}
