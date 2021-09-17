import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { OrderResponse } from 'src/app/model/order-response';
import { CommonService } from '../../shared/common.service';


@Component({
  selector: 'app-cibil-details',
  templateUrl: './cibil-details.component.html',
  styleUrls: ['./cibil-details.component.css']
})
export class CibilDetailsComponent implements OnInit {

  constructor(private cs : CommonService) { }

  cibilEnquiryjoin!:OrderResponse[]
  ngOnInit(): void {

    this.cs.getCibilJoin().subscribe(l => { this.cibilEnquiryjoin = l } )

  }

  id1:string
  generatePdf(id:string)
  {
    console.log("generatePdf")
    const a = document.getElementById('mylist')
    html2canvas(a).then(canvas => {
      const contentDataURL = canvas.toDataURL('image/png')  
      let pdf = new jsPDF('l', 'cm', 'a4'); 
      pdf.addImage(contentDataURL, 'PNG', 0, 0, 29.7, 21.0);  
      pdf.save('SianctionLetter.pdf');   
    }); 


  }

  sendEmail(email:string)
  {
    this.cs.sendMail(email).subscribe()
    window.location.reload();
  }

}


