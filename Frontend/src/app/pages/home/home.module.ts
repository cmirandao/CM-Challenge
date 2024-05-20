import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home.routing';
import { SharedModule } from '../../shared/shared/shared.module';
import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
