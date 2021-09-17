import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../../shared/common.service';
import { CustomerEnquiry } from 'src/app/model/customer-enquiry';


@Component({
  selector: 'app-cibil',
  templateUrl: './cibil.component.html',
  styleUrls: ['./cibil.component.css']
})
export class CibilComponent implements OnInit {

  constructor(private fb : FormBuilder, private cs : CommonService, private activatedroute : ActivatedRoute, private location : Location) { }

  ceObj:CustomerEnquiry;

  cibilForm!:FormGroup
  ngOnInit(): void {

    this.cibilForm = this.fb.group
    ({
      cid:[],
      panstatus:[],
      cibilscore:[],            
      cibilgenerateddate:[],
      oeremark:[],
      cibilgeneratedby:[],
      
      enqid1:[]            // create new variable (**with different name)

    })
    
    this.insert()
 

    
  }

  ce:CustomerEnquiry
  


  insert()
  {
         let obj:any  =  this.location.getState()

         let custEnq:CustomerEnquiry = obj                          //   id ----------> cibil form (enqid1)

         this.cibilForm.get('enqid1')?.setValue(custEnq.enqId)
  }



  generateCibil()
  {
    let randomnumber = Math.floor(Math.random() * (900 - 650 + 1)) + 650;
    console.log(randomnumber)
    this.cibilForm.patchValue
    ({
      cibilscore : randomnumber
    })
  }


  onSubmit()
  { 
    this.cs.saveCibil(   this.cibilForm.value  ,   this.cibilForm.controls.enqid1.value  ).subscribe()
    window.location.reload();
  }

}
