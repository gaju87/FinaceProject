import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerEnquiryComponent } from './customer-enquiry/customer-enquiry.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerDocumentComponent } from './customer-document/customer-document.component';


const reRoutes : Routes = [

  {path:"customer-enquiry", component:CustomerEnquiryComponent},
  {path:"customer-details", component:CustomerDetailsComponent},
  {path:"customer-documents", component:CustomerDocumentComponent},
]


@NgModule({
  declarations: [CustomerEnquiryComponent, CustomerDetailsComponent, CustomerDocumentComponent],
  imports: [
    CommonModule, RouterModule.forChild(reRoutes), ReactiveFormsModule,FormsModule,
  ]
})
export class ReModule { }
