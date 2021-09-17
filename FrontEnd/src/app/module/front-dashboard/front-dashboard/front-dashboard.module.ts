import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FrontDashboardComponent } from '../front-dashboard.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';

const routes: Routes = [
  {
     path: 'front-dash', component: FrontDashboardComponent 
  },
  {
    path:'about-us', component: AboutUsComponent
  },
  {
    path:'contact-us', component: ContactUsComponent
  },

  
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
    
  ]
})
export class FrontDashboardModule { }
