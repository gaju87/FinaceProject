import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonService } from '../../shared/common.service';


@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  constructor(private fb : FormBuilder, private cs : CommonService) { }

  customerDetailForm!:FormGroup

  ngOnInit(): void {

    this.customerDetailForm = this.fb.group
    ({
      custid:[],
      name:[],
      mobNo:[],
      email:[],
      familyMember:[],
      dependantMember:[],
      downPayment:[],
      permanetAddress:[],
      localAddress:[],
      requiredAmount:[],
      tenure:[],
      guarantor : this.fb.group
      ({
        garenterId:[],
        name:[],
        mobNo:[],
        adharcardNo:[],
        occupation:[]
      }),
      preLoanDetails : this.fb.group
      ({
        pId:[],
        laonType:[],
        loanAmount:[],
        remaingLoan:[],
        tenurePending:[],
        previousLoanBank:[]
      }),
      product : this.fb.group
      ({
        pid: [],
      productCompanyName: [],
      productName: [],
      colour: [],
      productPrice: [],
      }),
      dealer : this.fb.group
      ({
        dname:[],
        dealerAcctNo:[],
        dealerMoBNo:[],
        email:[],
        status:[],
          dealerBank : this.fb.group
            ({
               bid:[],
               status:[],
               address:[],
               bankName:[],
               branch : this.fb.group
                   ({
                      branchid:[],
                      ifscCode:[],
                      branchName:[],
                      branchAddress:[],
                      pincode:[]
                    })
              })
      })


  
    })


  }

  onSubmit()
  {
      this.cs.saveCustomerDetails(this.customerDetailForm.value).subscribe()
      window.location.reload();
  }


  addresCheckbox(event:any)
  {

    if(event.target.checked)
    {
      console.log("inside iffffffffffffffffff")
      this.customerDetailForm.patchValue
      ({
        localAddress : this.customerDetailForm.controls.permanetAddress.value
      })
    }

    else
    {
      console.log("inside elseeeeeeeeeeee")
      this.customerDetailForm.patchValue 
      ({
        localAddress :  ['']
      }) 
    }
  }

}
