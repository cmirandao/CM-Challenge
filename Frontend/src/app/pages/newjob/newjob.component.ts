import { Component, OnInit } from '@angular/core';
import { JobappService } from '../../services/jobapp.service';
import { Position, SaveApp, Candidate, UploadEvent } from '../../interfaces/jobapp';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FileUploadHandlerEvent } from 'primeng/fileupload';

@Component({
  selector: 'app-newjob',
  templateUrl: './newjob.component.html',
  styleUrl: './newjob.component.css'
})
export class NewjobComponent implements OnInit {
  positions: Position[] = [];
  candidates: Candidate[] = [];
  selectedPosition: Position | undefined;
  selectedCandidate: { candidate: Candidate, fullName: string } | undefined;
  newCandidate: boolean = false;

  jobAppForm: FormGroup;
  id_candidate = new FormControl('', []);
  rut = new FormControl('', [Validators.required]);
  name = new FormControl('', [Validators.required]);
  lastname = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required]);
  phone = new FormControl('', [Validators.required]);
  cv = new FormControl('', []);


  constructor(
    private jobSrv: JobappService,
    private formBuilder: FormBuilder
  ) {
    this.jobAppForm = formBuilder.group({
      id_candidate: this.id_candidate,
      rut: this.rut,
      name: this.name,
      lastname: this.lastname,
      email: this.email,
      phone: this.phone,
      cv: this.cv,
    })
  }

  ngOnInit(): void {
    this.getAllPosition();
    this.getAllCandidates();
  }

  getAllPosition() {
    this.jobSrv.getAllPosition().subscribe({
      next: (data) => this.positions = data,
      error: (e) => console.error(e),
      complete: () => console.info('All position loaded')
    })
  }

  getAllCandidates() {
    this.jobSrv.getAllCandidates().subscribe({
      next: (data) => this.candidates = data.map((candidate: {
        id_candidate: any; name: any; lastname: any;
      }) => ({
        candidate,
        fullName: `${candidate.id_candidate} - ${candidate.name} ${candidate.lastname}`
      })),
      error: (e) => console.error(e),
      complete: () => console.info('All candidates loaded')
    })
  }

  NewCandidate(){
    this.newCandidate= true;
    this.selectedCandidate=undefined;
  }

  onUpload(event:any ) {
    const file = event.target.files[0];
    const reader = new FileReader();
  
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const base64data = reader.result as string;
      this.cv.setValue(base64data);
    };
  }

  saveJobApp(): void {
    let dataCandidate;
    if(this.selectedCandidate){
      dataCandidate = this.selectedCandidate.candidate;
    }else{
      dataCandidate= this.jobAppForm.value;
    }
    if ((this.jobAppForm.valid || this.selectedCandidate) && this.selectedPosition) {
      let dataJobApp: SaveApp = {
        id_job: this.selectedPosition.id_job,
        id_status: 1
      }

      if (this.newCandidate && this.cv.value) {
        dataCandidate.cv = this.cv.value;
      }

      this.jobSrv.saveJobApp(dataCandidate, dataJobApp).subscribe({
        next: (response) => console.log('Postulación guardada con éxito', response.body),
        error: (e) => {
          if (e.status === 201 || e.status === 200) {
            console.log('Postulación guardada exitosamente');
            this.clearForm();
            this.navigateToHome();
          } else {
            console.error('Error al ingresar la postulación', e)
          }
        },
        complete: () => console.info('complete')
      })
    } else {
      alert('Por favor complete el formulario correctamente.');
    }
  }

  
  

  navigateToHome() {
    this.clearForm();
    this.jobSrv.navigateToHome();
  }

  clearForm(): void {
    this.jobAppForm.reset();
  }
}
