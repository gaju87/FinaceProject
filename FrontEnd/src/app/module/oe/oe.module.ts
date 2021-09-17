import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EnquiryListComponent } from './enquiry-list/enquiry-list.component';
import { CibilComponent } from './cibil/cibil.component';
import { CibilDetailsComponent } from './cibil-details/cibil-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
const oeRoutes : Routes =
[
  {path:'enquiry-list',component:EnquiryListComponent},
  {path:'cibil',component:CibilComponent},
  {path:'cibil-details',component:CibilDetailsComponent}
]

@NgModule({
  declarations: [EnquiryListComponent, CibilComponent, CibilDetailsComponent],
  imports: [
    CommonModule,RouterModule.forChild(oeRoutes), ReactiveFormsModule, FormsModule  ,NgxPaginationModule, NgbPaginationModule
  ]
})
export class OeModule { }
