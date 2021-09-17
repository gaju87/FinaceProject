import { Dealer } from "./dealer";
import { Guarantor } from "./guarantor";
import { PreviousLoanDetails } from "./previous-loan-details";
import { Product } from "./product";

export class Customerdetails {

    custid!:number;
    name!:string;
    mobNo!:string;
    email!:string;
    familyMember!:number;
    dependantMember!:number;
    downPayment!:number;
    permanetAddress!:string;
    localAddress!:string;
    requiredAmount!:number;
    tenure!:number;

    guarantor!:Guarantor;
    preLoanDetails!:PreviousLoanDetails;
    dealer!:Dealer;
    product!:Product;

}
