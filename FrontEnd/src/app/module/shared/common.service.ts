import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cibil } from 'src/app/model/cibil';
import { CustomerEnquiry } from 'src/app/model/customer-enquiry';
import { Customerdetails } from 'src/app/model/customerdetails';
import { OrderResponse } from 'src/app/model/order-response';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  saveCustEnquiry="http://localhost:8001/saveEnquiry"
  saveCustDetail="http://localhost:8001/saveCustomerDetails"
  saveDoc="http://localhost:8001/saveCustomerDocument"
  getEnq="http://localhost:8001/getAllEnquiry"
  saveCibilUrl="http://localhost:8001/saveCibil"
  getSingleEnquiryUrl="http://localhost:8001/getSingleEnquiry"
  updateCustomerEnquiryPatchUrl="http://localhost:8001/updateEnquiryPatch"
  getCibilJoinUrl="http://localhost:8001/getCibilJoin"
//-----------------------------------------------------------------------save-enquiry-----
  saveEnquiry(enquiry:CustomerEnquiry)
  {
    return this.http.post(this.saveCustEnquiry,enquiry)
  }

//-----------------------------------------------------------------------save-details-----

  saveCustomerDetails(customer : Customerdetails)
  {
    return this.http.post(this.saveCustDetail,customer)
  }

//-----------------------------------------------------------------------save-documents-----

  saveDocuments(doc : any)
  {
    return this.http.post(this.saveDoc, doc)
  }

//----------------------------------------------------------------------------get-enquiry---

  getEnquries():Observable<CustomerEnquiry[]>
  {
    return this.http.get<CustomerEnquiry[]>(this.getEnq)
  }

//---------------------------------------------------------------------------save-cibil---

  saveCibil(cibil:Cibil,id:number)
  {
    return this.http.post(this.saveCibilUrl+"/"+id, cibil)
  }

  //------------------------------------------------------------------------get-cibil-Enquiry-join-list--

  getCibilJoin():Observable<OrderResponse[]>
  {
   return this.http.get<OrderResponse[]>(this.getCibilJoinUrl)
  }

//---------------------------------------------------------------------------send-email---

mailUrl = "http://localhost:8001/sendEmail"

 sendMail(email:string)
 {
   return this.http.get(this.mailUrl+"/"+email)
 }




}
