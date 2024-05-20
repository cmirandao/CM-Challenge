import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewjobComponent } from './newjob.component';


const routes: Routes = [
    {
        path: '',
        component: NewjobComponent,
        data: {
            title: 'New Job Application'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NewjobRoutingModule { }