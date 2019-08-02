import { Component, OnInit, ViewChild } from "@angular/core";
import { CustomerDetailsUploadComponent } from "../customer-details-upload/customer-details-upload.component";
import { customerData } from "../../models/customerData";
import {
  MatPaginator,
  MatSort,
  MatTableDataSource,
  MatDialog
} from "@angular/material";
import { CustomerDataService } from "../../service/customer/customer-data.service";
import { CustomerReferenceDataComponent } from "../../customer/customer-refrence-data/customer-reference-data/customer-reference-data.component";

@Component({
  selector: "app-customer-reference-details",
  templateUrl: "./customer-reference-details.component.html",
  styleUrls: ["./customer-reference-details.component.scss"]
})
export class CustomerReferenceDetailsComponent implements OnInit {
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
    "refrenceOne",
    "refrenceTwo",
    "refrenceThree",
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
    return this.customerDataServices.getCustomerData(1).subscribe(res => {
      this.dataSource.data = res as customerData[];
    });
  }

  public submit(customerId: number) {
    this.dialog.open(CustomerDetailsUploadComponent, {
      data: {
        customerId: customerId,
        isReference: true
      }
    });
  }

  // public submitTwo(customerId: number) {
  //   this.dialog.open(CustomerDetailsUploadComponent, {
  //     data: {
  //       customerId: customerId,
  //       isReference: true
  //     }
  //   });
  // }

  // public submitThree(customerId: number) {
  //   this.dialog.open(CustomerDetailsUploadComponent, {
  //     data: {
  //       customerId: customerId,
  //       isReference: true
  //     }
  //   });
  // }

  public referenceData(customerId: number) {
    this.dialog.open(CustomerReferenceDataComponent, {
      data: {
        customerId: customerId
      }
    });
  }
}
