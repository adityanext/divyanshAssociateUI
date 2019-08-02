import { Component, OnInit, ViewChild } from "@angular/core";
import { empData } from "src/app/models/empData";
import { dailyData } from "src/app/models/dailyData";
import { CustomerDataService } from "src/app/service/customer/customer-data.service";
import {
  MatTableDataSource,
  MatSort,
  MatPaginator,
  MatDialog
} from "@angular/material";
import { loanType } from "src/app/models/loanType";
import { bankType } from "src/app/models/bankType";
import { UserRoleComponent } from "src/app/frame/user-role/user-role/user-role.component";

@Component({
  selector: "app-daily-data",
  templateUrl: "./daily-data.component.html",
  styleUrls: ["./daily-data.component.scss"],
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
export class DailyDataComponent implements OnInit {
  constructor(
    private customerDataServices: CustomerDataService,
    private userRole: UserRoleComponent
  ) {}
  public finalStatus: dailyData[] = [];
  public isAdmin(): boolean {
    if (this.userRole.role == "admin") {
      return true;
    } else {
      return false;
    }
  }
  displayedColumns: string[] = [
    "id",
    "name",
    "primaryPhoneNumber",
    "secondaryPhoneNumber",
    "status",
    "assignTo",
    "select"
  ];
  resultsLength = 0;

  public employee: empData[];
  public loanTypes: loanType[];
  public bankDataDetails: bankType[];
  public dataSource = new MatTableDataSource<dailyData>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.getAllCustomerData();
    this.getEmployeeData();
    this.getLoanData();
    this.getBankData();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  };

  public getAllCustomerData() {
    return this.customerDataServices.getDailyData().subscribe(res => {
      this.dataSource.data = res as dailyData[];
    });
  }

  public getEmployeeData() {
    return this.customerDataServices.epmloyeeDetails.subscribe(res => {
      this.employee = res;
    });
  }

  public getLoanData() {
    return this.customerDataServices.loanTypeDetails.subscribe(res => {
      this.loanTypes = res;
    });
  }

  public getBankData() {
    return this.customerDataServices.bankTypeDetails.subscribe(res => {
      debugger;
      this.bankDataDetails = res;
    });
  }

  public uploadData(customer: any) {
    let test: dailyData = customer;
    if (this.finalStatus.filter(x => x.id === customer.id).length > 0) {
      this.finalStatus = this.finalStatus.filter(x => x.id !== customer.id);
    } else {
      this.finalStatus.push(test);
    }
    return this.finalStatus;
  }

  public submit(finalStatus: dailyData[]) {
    const request = JSON.stringify(finalStatus);
    let da = this.customerDataServices.postDailyDataCollection(request);
    if (da === null) {
      this.ngOnInit();
    }
  }
}
