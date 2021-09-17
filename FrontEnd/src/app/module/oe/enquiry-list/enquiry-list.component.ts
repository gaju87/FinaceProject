import { Component, OnInit } from '@angular/core';
import { CustomerEnquiry } from 'src/app/model/customer-enquiry';
import { CommonService } from '../../shared/common.service';


@Component({
  selector: 'app-enquiry-list',
  templateUrl: './enquiry-list.component.html',
  styleUrls: ['./enquiry-list.component.css']
})
export class EnquiryListComponent implements OnInit {

  constructor(private cs : CommonService) { }

  enqList!:CustomerEnquiry[]

  ngOnInit(): void 
  {
    this.cs.getEnquries().subscribe(l => { this.enqList = l } )

  }

  p:number=1
  count:number=4

 

  onTableDataChange(event){
    this.p = event;
    this.cs.getEnquries().subscribe(l => { this.enqList = l } )
  }  

}
