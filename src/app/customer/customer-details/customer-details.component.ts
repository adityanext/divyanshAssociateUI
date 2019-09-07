import { ActivatedRoute, Router } from "@angular/router";
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

@Component({
  selector: "app-customer-details",
  templateUrl: "./customer-details.component.html",
  styleUrls: ["./customer-details.component.scss"],
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
export class CustomerDetailsComponent implements OnInit {
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
    "select"
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
    return this.customerDataServices.getCustomerData(0).subscribe(res => {
      this.dataSource.data = res as customerData[];
    });
  }

  public submit(customerId: number) {
    this.dialog.open(CustomerDetailsUploadComponent, {
      data: {
        customerId: customerId,
        isReference: false
      }      
    });
  }
}
