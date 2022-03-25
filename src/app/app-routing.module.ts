import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { pathToFileURL } from 'url';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ScheduleComponent } from './schedule/schedule.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {  
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'contactus',
    component: ContactUsComponent
  },
  {
    path: 'schedule',
    component: ScheduleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
