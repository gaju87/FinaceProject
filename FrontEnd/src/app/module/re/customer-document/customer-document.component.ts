import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../shared/common.service';


@Component({
  selector: 'app-customer-document',
  templateUrl: './customer-document.component.html',
  styleUrls: ['./customer-document.component.css']
})
export class CustomerDocumentComponent implements OnInit {

  constructor(private cs:CommonService) { }

  ngOnInit(): void {

  }

  customer:any = {custid:''}       

  pancard:any
  adharcard:any
  incomeProof:any
  signature:any
  addressProof:any
  productQuotation:any
  photo:any
  itrFile:any

  pan(file:any)
  { this.pancard = file.target.files[0] }

  adhar(file:any)
  { this.adharcard = file.target.files[0] }

  income(file:any)
  { this.incomeProof = file.target.files[0] }

  sig(file:any)
  { this.signature = file.target.files[0] }

  addr(file:any)
  { this.addressProof = file.target.files[0] }

  product(file:any)
  { this.productQuotation = file.target.files[0] }

  ph(file:any)
  { this.photo = file.target.files[0] }

  itr(file:any)
  { this.itrFile = file.target.files[0] }




  onSubmit()
  {
    console.log("inside---submit")
      const obj = new FormData();

      obj.append('pancard',this.pancard);
      obj.append('adharcard',this.adharcard);
      obj.append('incomeProof',this.incomeProof);
      obj.append('signature',this.signature);
      obj.append('addressProof',this.addressProof);
      obj.append('productQuotation',this.productQuotation);
      obj.append('photo',this.photo);
      obj.append('itrFile',this.itrFile);
      window.location.reload();


      const customerObj=  JSON.stringify(this.customer)       

      obj.append('customerData',customerObj);



      this.cs.saveDocuments(obj).subscribe();
  }

}
