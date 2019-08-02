import { Component, OnInit, ViewChild, Inject } from "@angular/core";
import { CustomerDataService } from "../../../service/customer/customer-data.service";
import {
  MatDialog,
  MatTableDataSource,
  MatSort,
  MatPaginator,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material";
import { customerData } from "../../../models/customerData";

@Component({
  selector: "app-customer-reference-data",
  templateUrl: "./customer-reference-data.component.html",
  styleUrls: ["./customer-reference-data.component.scss"],
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
export class CustomerReferenceDataComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<CustomerReferenceDataComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
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
    return this.customerDataServices
      .getCustomerReferenceData(this.data.customerId)
      .subscribe(res => {
        this.dataSource.data = res as customerData[];
      });
  }
}
