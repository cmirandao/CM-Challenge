import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared/shared.module';
import { NewjobRoutingModule } from './newjob.routing';
import { NewjobComponent } from './newjob.component';



@NgModule({
  declarations: [NewjobComponent],
  imports: [
    SharedModule,
    NewjobRoutingModule
  ]
})
export class NewjobModule { }
