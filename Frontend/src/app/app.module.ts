import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { JobappService } from './services/jobapp.service';
import { SharedModule } from './shared/shared/shared.module';
import { HomeModule } from './pages/home/home.module';
import { NewjobModule } from './pages/newjob/newjob.module';
import { NewpositionModule } from './pages/newposition/newposition.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HomeModule,
    NewjobModule,
    NewpositionModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [JobappService, provideHttpClient(withFetch())],
  bootstrap: [AppComponent]
})
export class AppModule { }
