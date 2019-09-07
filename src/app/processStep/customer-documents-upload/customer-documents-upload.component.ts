import { Component, OnInit, ViewChild } from "@angular/core";
import { customerData } from "../../../app/models/customerData";
import { CustomerDataService } from "../../../app/service/customer/customer-data.service";
import { CustomerDetailsUploadComponent } from "../../../app/processStep/customer-details-upload/customer-details-upload.component";
import {
  MatDialog,
  MatPaginator,
  MatSort,
  MatTableDataSource
} from "@angular/material";
import { DocumentComponentComponent } from "../../../app/data/document-component/document-component.component";
import { CustomerReferenceDataComponent } from "../../../app/customer/customer-refrence-data/customer-reference-data/customer-reference-data.component";

@Component({
  selector: 'app-customer-documents-upload',
  templateUrl: './customer-documents-upload.component.html',
  styleUrls: ['./customer-documents-upload.component.scss'],
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
export class CustomerDocumentsUploadComponent implements OnInit {

  constructor(
    private customerDataServices: CustomerDataService,
    public dialog: MatDialog
  ) {}


  displayedColumns: string[] = [
    "id",
    "name",
    "primaryPhoneNumber",
    "secondaryPhoneNumber",
    "assignTo",
    "select",
    "refrenceData"
  ];
  resultsLength = 0;
  public dataSource = new MatTableDataSource<customerData>();

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

  public getAllCustomerData() {
    return this.customerDataServices.getCustomerData(2).subscribe(res => {
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
  
  public submit(loanType: number, _customerId: number) {
    
    const dialogRef = this.dialog.open(DocumentComponentComponent, {
      data: {
        loan:{
          loanId:loanType
        },
        customerId: _customerId
      }
    });   

    dialogRef.afterClosed().subscribe(
        data => this.ngOnInit()
    );   
  }
}
