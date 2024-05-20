import { Component, OnInit, ViewChild } from '@angular/core';
import { Column, Jobapp, Position, Status } from '../../interfaces/jobapp';
import { JobappService } from '../../services/jobapp.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { FilterService } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  jobApp: Jobapp[] = [];
  jobAppDetail: Jobapp[] = [];
  positions: Position[] = [];
  loading: boolean = false;
  dataLoaded: boolean = false;
  jobs: any = [];
  sidebarVisible: boolean = false;
  selectedStatus: Status = {
    id_status: 0,
    description: ''
  };
  status: Status[] = [];
  cols: Column[] = [];
  selectedDate: Date = new Date();
  jobAppFiltered: Jobapp[] = [];

  constructor(
    private jobSrv: JobappService,
    private router: Router,
    private filterService: FilterService
  ) { 
    this.cols = [
      { field: 'id_jobapp', header: 'Código de Postulación' },
      { field: 'date_application', header: 'Fecha de postulación' },
      { field: 'jobName', header: 'Posición' },
      { field: 'jobDesc', header: 'Descripción' },
      { field: 'candidateName', header: 'Candidato' },
      { field: 'statusDesc', header: 'Estado' }
    ];

  }

  ngOnInit(): void {
    const customFilterName = 'custom-equals';
    this.getAllJobsApp();
    this.getAllPosition();
    this.getAllStatus();

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.getAllJobsApp();
    });

  };

  getAllJobsApp() {
    this.jobSrv.getAllJobsApp().subscribe({
      next: (data) => {this.jobApp = data; this.jobAppFiltered = data;},
      error: (e) => console.error(e),
      complete: () => console.info('All jobs application loaded')
    })
  }

  getAllPosition() {
    this.jobSrv.getAllPosition().subscribe({
      next: (data) => this.positions = data,
      error: (e) => console.error(e),
      complete: () => console.info('All positions loaded')
    })
  }

  getAllStatus() {
    this.jobSrv.getAllStatus().subscribe({
      next: (data) => this.status = data,
      error: (e) => console.error(e),
      complete: () => console.info('All status loaded')
    })
  }

  viewJob(job: any) {
    this.sidebarVisible = true;
    this.jobAppDetail = job;
    this.selectedStatus = {
      id_status: job.id_status,
      description: job.description
    }
  }

  updateJobApp(jobapp: Jobapp[], selectedStatus: Status): void {
    this.jobSrv.updateJobApp(jobapp, selectedStatus).subscribe({
      next: () => {
        this.sidebarVisible = false;
        this.getAllJobsApp();
        console.log('Estado actualizado con éxito')
      },
      error: (e) => {
        if (e.status === 201 || e.status === 200) {
          this.sidebarVisible = false;
          this.getAllJobsApp();
          console.log('Estado actualizado exitosamente', e.body);
        } else {
          console.error('Error al actualizar el estado', e)
        }
      },
      complete: () => console.info('complete')
    });
  }

  filterDate(selectedDate: Date) {
    if (selectedDate) {
      this.jobAppFiltered = this.jobApp.filter(job => {
        const jobDate = new Date(job.date_application);
        return jobDate.toDateString() === selectedDate.toDateString();
      });
    } else {
      this.jobAppFiltered = this.jobApp;
    }
  }

  downloadCV(cvBase64: String): void {
    if (!cvBase64) {
      console.error('No hay archivo para descargar');
      return;
    }

    const byteString = atob(cvBase64.split(',')[1]);
    const mimeString = cvBase64.split(',')[0].split(':')[1].split(';')[0];
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const intArray = new Uint8Array(arrayBuffer);

    for (let i = 0; i < byteString.length; i++) {
      intArray[i] = byteString.charCodeAt(i);
    }

    const blob = new Blob([intArray], { type: mimeString });

    const extension = mimeString.split('/')[1];
    let filename = 'curriculum_vitae';

    if (extension === 'vnd.openxmlformats-officedocument.wordprocessingml.document') {
      filename += '.docx';
    } else if (extension === 'msword') {
      filename += '.doc';
    } else {
      filename += '.' + extension;
    }

    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  load() {
    this.loading = true;

    setTimeout(() => {
      this.loading = false
    }, 2000);
  }

  navigateToNewPosition() {
    this.jobSrv.navigateToNewPosition();
  }

  navigateToNewJobApp() {
    this.jobSrv.navigateToNewJobApp();
  }

}
