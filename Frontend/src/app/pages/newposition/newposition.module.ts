import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared/shared.module';
import { NewpositionRoutingModule } from './newposition.routing';
import { NewpositionComponent } from './newposition.component';



@NgModule({
  declarations: [NewpositionComponent],
  imports: [
    SharedModule,
    NewpositionRoutingModule
  ]
})
export class NewpositionModule { }
