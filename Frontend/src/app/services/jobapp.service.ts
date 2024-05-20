import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Jobapp, Candidate, SaveApp } from '../interfaces/jobapp';

@Injectable({
  providedIn: 'root'
})
export class JobappService {
  private baseUrl = 'http://localhost:8080/cmchallenge/challenge/';

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  getAllJobsApp(): Observable<any> {
    return this.http.get<any>(this.baseUrl+'jobappview');
  }

  savePosition(position: Jobapp){
    return this.http.post<Jobapp>(this.baseUrl+'job/save',position, { observe: 'response' }).subscribe({
      next: (response) => console.log('Posición guardada con éxito', response.body),
      error: (e) => {
        if (e.status === 201 || e.status === 200) {
          console.log('Posición guardada exitosamente', e.body);
        } else {
          console.error('Error al ingresar la Posición', e)
        }
      },
      complete: () => console.info('complete')
    });
  }

  saveCandidate(candidate: Candidate): Observable<number>  {
    return this.http.post<number>(this.baseUrl + 'candidate/save', candidate).pipe(
      map(response => response)
    );
  }

  saveJobApp(candidate: Candidate, jobApp: SaveApp): Observable<any> {
    return this.saveCandidate(candidate).pipe(
      switchMap(id => {
        jobApp.id_candidate = id;
        return this.http.post<SaveApp>(this.baseUrl + 'jobapplication/save', jobApp, { observe: 'response' });
      })
    );
  }

  updateJobApp(data: any, status: any) {
    let updateData = {
      id_jobapp: data.id_jobapp,
      id_candidate: data.id_candidate,
      id_job: data.id_job,
      id_status: status.id_status
    }
    return this.http.put(this.baseUrl+'jobapplication/save',updateData, { observe: 'response' }).pipe(
      map(response => response)
    );;
  }

  getAllPosition(): Observable<any> {
    return this.http.get<any>(this.baseUrl+'job');
  }

  getAllCandidates(): Observable<any> {
    return this.http.get<any>(this.baseUrl+'candidate');
  }

  getAllStatus(): Observable<any> {
    return this.http.get<any>(this.baseUrl+'status');
  }

  navigateToNewPosition() {
    this.router.navigate(['/newJob']);
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  navigateToNewJobApp() {
    this.router.navigate(['/newJobApp']);
  }
}
