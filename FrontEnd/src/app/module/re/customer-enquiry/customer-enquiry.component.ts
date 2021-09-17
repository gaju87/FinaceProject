import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonService } from '../../shared/common.service';


@Component({
  selector: 'app-customer-enquiry',
  templateUrl: './customer-enquiry.component.html',
  styleUrls: ['./customer-enquiry.component.css']
})
export class CustomerEnquiryComponent implements OnInit {

  constructor(private fb: FormBuilder, private cs: CommonService) { }

  enquiryForm!: FormGroup
  ngOnInit(): void {

    this.enquiryForm = this.fb.group
      ({
        enqId: [],
        name: [],
        mobNo: [],
        address: [],
        email: [],
        panNo: [],
        dob: [],
        occupation: [],
        annualIncome: [],
        cibilStatus: []

      })
  }


  onSubmit() 
  {
    this.cs.saveEnquiry(this.enquiryForm.value).subscribe()
    window.location.reload();
  }

}
