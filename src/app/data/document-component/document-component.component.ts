import { Component, OnInit, ViewChild, Inject } from "@angular/core";
import { CustomerDataService } from "src/app/service/customer/customer-data.service";
import { loanType } from "src/app/models/loanType";
import { MatTableDataSource, MatSort, MatPaginator } from "@angular/material";
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from "@angular/material";
import { DecelartionDataComponent } from "src/app/common/decelartion-data/decelartion-data.component";
import { Router } from "@angular/router";

@Component({
  selector: 'app-document-component',
  templateUrl: './document-component.component.html',
  styleUrls: ['./document-component.component.scss']
})
export class DocumentComponentComponent implements OnInit {

  constructor(private customerDataServices: CustomerDataService,
    public dialogRef: MatDialogRef<DocumentComponentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public router:Router,
    public dialog: MatDialog
    ){}  

  displayedColumns: string[] = ["document","select"];
    public dataSource = new MatTableDataSource <string>();
    public documentNameList = new Array<string>();
    public loanTypes: loanType[];

    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;

    ngOnInit() {  
      this.getDocumentList(this.data.loan);
    }

    public upload() {
 
        const dialogRef = this.dialog.open(DecelartionDataComponent, {
          data: {
            processStep: 3,
            customerId: this.data.customerId,
            statement: " document for all refrences data upload "
          }
        });
    
        dialogRef.afterClosed().subscribe(
            data=>  this.dialogRef.close()
        );    
      }

    public getDocumentList(loan:any){      
      this.documentNameList = new Array<string>();
      
      this.documentNameList.push("PAN Card");
      this.documentNameList.push("Aadhar Card");
      this.documentNameList.push("TWO Photograph");

        if(loan.loanId === 1){
            this.documentNameList.push("One Login Fees Cheque");
            this.documentNameList.push("One year bank statement");
            this.documentNameList.push("Income Proof and Company Confirmation");
            this.documentNameList.push("Cash salary minimum 10000 Rs");
            this.documentNameList.push("Property paper With leagal and technical Documents");
        }

        else if(loan.loanId === 2){
            this.documentNameList.push("One Login Fees Cheque");
            this.documentNameList.push("6 Months salary slip");
            this.documentNameList.push("Joining letter/ Service Certificate");
            this.documentNameList.push("One year bank statement");
            this.documentNameList.push("Form 16 Latest 2 years");
            this.documentNameList.push("Property papers with legal and technical");
            this.documentNameList.push("IF BT then Sanction letter, Track record, Fore closer and List of documents");
        }

        else if(loan.loanId === 3){
            this.documentNameList.push("One Login Fees Cheque");
            this.documentNameList.push("3 Yeras ITR Computation, P&L balance sheet");
            this.documentNameList.push("Firm registration and GST");
            this.documentNameList.push("One year bank statement OD/CC");
            this.documentNameList.push("Property papers with legal and technical");
            this.documentNameList.push("IF BT then Sanction letter, Track record, Fore closer and List of documents");
        }

        else if(loan.loanId === 4){
            this.documentNameList.push("One Login Fees Cheque");
            this.documentNameList.push("ITR if filled");
            this.documentNameList.push("Firm registration and GST");
            this.documentNameList.push("One year bank statement OD/CC");
            this.documentNameList.push("Property papers with legal and technical");
            this.documentNameList.push("IF BT then Sanction letter, Track record, Fore closer and List of documents");
        }

        else if(loan.loanId === 5){
            this.documentNameList.push("One Login Fees Cheque");
            this.documentNameList.push("3 Yeras ITR Computation, P&L balance sheet");
            this.documentNameList.push("Firm registration and GST");
            this.documentNameList.push("One year bank statement OD/CC");
            this.documentNameList.push("Property papers with legal and technical");
            this.documentNameList.push("IF BT then Sanction letter, Track record, Fore closer and List of documents");
        }

        else if(loan.loanId === 6){
            this.documentNameList.push("One Login Fees Cheque");
            this.documentNameList.push("6 Months salary slip");
            this.documentNameList.push("Joining letter/ Service Certificate");
            this.documentNameList.push("One year bank statement");
            this.documentNameList.push("Form 16 Latest 2 years");
            this.documentNameList.push("Property papers with legal and technical");
            this.documentNameList.push("Track record of loan if already taken");
            this.documentNameList.push("IF BT then Sanction letter, Track record, Fore closer and List of documents");
        }

        else if(loan.loanId === 7){
            this.documentNameList.push("One Login Fees Cheque");
            this.documentNameList.push("ITR if filled");
            this.documentNameList.push("Firm registration and GST");
            this.documentNameList.push("One year bank statement OD/CC");
            this.documentNameList.push("Property papers with legal and technical");
            this.documentNameList.push("IF BT then Sanction letter, Track record, Fore closer and List of documents");
        }

        else if(loan.loanId === 8){
            this.documentNameList.push("One Login Fees Cheque");
            this.documentNameList.push("3 Yeras ITR Computation, P&L balance sheet");
            this.documentNameList.push("Firm registration and GST");
            this.documentNameList.push("One year bank statement OD/CC");
            this.documentNameList.push("CA Certificate");
            this.documentNameList.push("CA Nodue");
            this.documentNameList.push("CA PAN Password");
            this.documentNameList.push("2 Year project balance sheet");
            this.documentNameList.push("Stock statement");
        }

        else if(loan.loanId === 9){
            this.documentNameList.push("One Login Fees Cheque");
            this.documentNameList.push("2/3 Yeras ITR Computation, P&L balance sheet");
            this.documentNameList.push("Firm registration NO");
            this.documentNameList.push("Car Quotation");
            this.documentNameList.push("If Govt bank then gaurantor required");
        }

        else if(loan.loanId === 10){
            this.documentNameList.push("3 Months salary slip");
            this.documentNameList.push("2 year form 16");
            this.documentNameList.push("Car Quotation");
            this.documentNameList.push("If Govt bank then gaurantor required");
        }

        else if(loan.loanId === 11){
            this.documentNameList.push("3 Months salary slip");
            this.documentNameList.push("2 year form 16");
            this.documentNameList.push("One year bank statement");
            this.documentNameList.push("Compnay joining letter");
            this.documentNameList.push("Lont track record if any");
        }

        else if(loan.loanId === 12){
            this.documentNameList.push("3 year ITR");
            this.documentNameList.push("Firm registration");
            this.documentNameList.push("One year bank statement");
            this.documentNameList.push("Lont track record if any");
        }

        else if(loan.loanId === 13){
            this.documentNameList.push("3 year ITR");
            this.documentNameList.push("Firm registration");
            this.documentNameList.push("Firm registration NOC");
            this.documentNameList.push("Electricity bill");
            this.documentNameList.push("Machine Quotation/catalog");
            this.documentNameList.push("Project Report");
            this.documentNameList.push("Project Owenership Document/Rent aggrement 8 years");
            this.documentNameList.push("Porperty paper with legal");
            this.documentNameList.push("Margin money 5% to 25%");
            this.documentNameList.push("If loan sanction for building then MAP & estimate");
        }

        else if(loan.loanId === 14){
            this.documentNameList = null;
            this.documentNameList.push("Society Bye-Laws");
            this.documentNameList.push("Society Pan card");
            this.documentNameList.push("Society Income Tax return");
            this.documentNameList.push("Society Bank Account statement");
            this.documentNameList.push("Affiliation Certificate");
            this.documentNameList.push("Propety Paper");
            this.documentNameList.push("143");
            this.documentNameList.push("Manage KYC");
            this.documentNameList.push("Bank Account of manager 1 year and 3 year ITR");
            this.documentNameList.push("Treasury management KYC, Bank statement, 2 photo and 3 Year ITR");
        }

        this.dataSource.data = this.documentNameList;
    }
}
