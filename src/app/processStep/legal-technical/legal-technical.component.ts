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
  selector: 'app-legal-technical',
  templateUrl: './legal-technical.component.html',
  styleUrls: ['./legal-technical.component.scss'],
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
export class LegalTechnicalComponent implements OnInit {

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
    return this.customerDataServices.getCustomerData(6).subscribe(res => {
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
          processStep: 7,
          customerId:customerId,
          statement: " legal and technical verification completed "
        }
      });
  
      dialogRef.afterClosed().subscribe(
          data => this.ngOnInit()
      );    
    }

}
