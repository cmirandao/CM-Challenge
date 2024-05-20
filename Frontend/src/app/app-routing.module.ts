import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NewpositionComponent } from './pages/newposition/newposition.component';
import { NewjobComponent } from './pages/newjob/newjob.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'newJob', component: NewpositionComponent },
  { path: 'newJobApp', component: NewjobComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
