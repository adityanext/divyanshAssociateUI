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
import { DecelartionDataComponent } from "../../../app/common/decelartion-data/decelartion-data.component";


@Component({
  selector: 'app-bank-verification',
  templateUrl: './bank-verification.component.html',
  styleUrls: ['./bank-verification.component.scss'],
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
export class BankVerificationComponent implements OnInit {

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
    return this.customerDataServices.getCustomerData(3).subscribe(res => {
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
  
  public submit(customerId: number) {
 
      const dialogRef = this.dialog.open(DecelartionDataComponent, {
        data: {
          processStep: 4,
          customerId:customerId,
          statement: " bank verification for all refrences completed "
        }
      });
  
      dialogRef.afterClosed().subscribe(
          data => this.ngOnInit()
      );    
    }

}
