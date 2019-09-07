import { Component, OnInit, ViewChild } from "@angular/core";
import { customerData } from "../../../app/models/customerData";
import { CustomerDataService } from "../../../app/service/customer/customer-data.service";
import {
  MatDialog,
  MatPaginator,
  MatSort,
  MatTableDataSource
} from "@angular/material";
import { CustomerReferenceDataComponent } from "../../../app/customer/customer-refrence-data/customer-reference-data/customer-reference-data.component";
import { DecelartionDataComponent } from "../../../app/common/decelartion-data/decelartion-data.component";

@Component({
  selector: 'app-master-search',
  templateUrl: './master-search.component.html',
  styleUrls: ['./master-search.component.scss'],
  styles: [
    `
      :host ::ng-deep .ui-table .ui-table-thead > tr > th {
        position: -webkit-sticky;
        position: sticky;
        top: 70px;
      }

      @media screen and (max-width: 64em) {
        :host ::ng-deep .ui-table .ui-table-thead > tr > th {
          top: 100px;
        }
      }
    `
  ]
})
export class MasterSearchComponent implements OnInit {

  constructor(
    private customerDataServices: CustomerDataService,
    public dialog: MatDialog
  ) {}

  displayedColumns: string[] = [
    "id",
    "name",
    "primaryPhoneNumber",
    "secondaryPhoneNumber",
	"loanAmount",
	"loanType",
    "assignTo",
    "step",
    "refrenceData"
  ];
  resultsLength = 0;
  public dataSource = new MatTableDataSource<customerData>();
  public processStep:string;
  public loanType:string;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.getAllCustomerData();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  };

  public getProcessType(processType:number){
    if (processType === 0)
    {
      this.processStep = "Customer Data upload";
      return this.processStep;
    }
    else if (processType === 1)
    {
      this.processStep = "Customer refernce upload";
      return this.processStep;
    }

    else if (processType === 2)
    {
      this.processStep = "Customer document upload";
      return this.processStep;
    }
    else if (processType === 3)
    {
      this.processStep = "Bank Verification";
      return this.processStep;
    }
    else if (processType === 4)
    {
      this.processStep = "Cibil Verification";
      return this.processStep;
    }
    else if (processType === 5)
    {
      this.processStep = "Stamp Duty";
      return this.processStep;
    }
    else if (processType === 6)
    {
      this.processStep = "Legal and Technical";
      return this.processStep;
    }
    else if (processType === 7)
    {
      this.processStep = "Loan Disbursal";
      return this.processStep;
    }
    else if (processType === 8)
    {
      this.processStep = "Loan closed";
      return this.processStep;
    }
    return false;
    
  }
  
  public getLoanType(loanType:number){    
    if (loanType === 1)
    {
      this.loanType = "Home Loan in case of cash salary";
      return this.loanType;
    }

    else if (loanType === 2)
    {
      this.loanType = "Home Loan in case of salaried";
      return this.loanType;
    }
    else if (loanType === 3)
    {
      this.loanType = "Home Loan in case of Buisness Applicant";
      return this.loanType;
    }
    else if (loanType === 4)
    {
      this.loanType = "Home Loan in case of no income proof";
      return this.loanType;
    }
    else if (loanType === 5)
    {
      this.loanType = "Loan against property in case of buisness class";
      return this.loanType;
    }
    else if (loanType === 6)
    {
      this.loanType = "Loan Against Property in case of salaried";
      return this.loanType;
    }
    else if (loanType === 7)
    {
      this.loanType = "Loan Against Property in case of non income proof";
      return this.loanType;
    }
    else if (loanType === 8)
    {
      this.loanType = "Limit overdraft";
      return this.loanType;
    }
	else if (loanType === 9)
    {
      this.loanType = "Car Loan in case of non salary classs";
      return this.loanType;
    }
    else if (loanType === 10)
    {
      this.loanType = "Car Loan salaried";
      return this.loanType;
    }
    else if (loanType === 11)
    {
      this.loanType = "Personal Loan";
      return this.loanType;
    }
    else if (loanType === 12)
    {
      this.loanType = "Buisness Loan";
      return this.loanType;
    }
    else if (loanType === 13)
    {
      this.loanType = "Project Finance";
      return this.loanType;
    }
    else if (loanType === 14)
    {
      this.loanType = "School Finance";
      return this.loanType;
    }	
    return false;
    
  }
  public getAllCustomerData() {
    return this.customerDataServices.getCustomerDataForAll().subscribe(res => {
      this.dataSource.data = res as customerData[];
    });
  }

  public referenceData(customerId: number) {
    this.dialog.open(CustomerReferenceDataComponent, {
      data: {
        customerId: customerId
      }
    });
  }
}
