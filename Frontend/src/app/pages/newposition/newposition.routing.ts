import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewpositionComponent } from './newposition.component';


const routes: Routes = [
    {
        path: '',
        component: NewpositionComponent,
        data: {
            title: 'New Position'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NewpositionRoutingModule { }