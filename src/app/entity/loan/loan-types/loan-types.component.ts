import { Component, OnInit, ViewChild } from "@angular/core";
import { CustomerDataService } from "src/app/service/customer/customer-data.service";
import { loanType } from "src/app/models/loanType";
import { MatTableDataSource, MatSort, MatPaginator } from "@angular/material";

@Component({
  selector: "app-loan-types",
  templateUrl: "./loan-types.component.html",
  styleUrls: ["./loan-types.component.scss"]
})
export class LoanTypesComponent implements OnInit {
  constructor(private customerDataServices: CustomerDataService) {}

  displayedColumns: string[] = ["id", "loanName", "loanDescription"];

  public dataSource = new MatTableDataSource<loanType>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit() {
    this.getLoanData();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  };

  public getLoanData() {
    return this.customerDataServices.loanTypeDetails.subscribe(res => {
      this.dataSource.data = res as loanType[];
    });
  }
}
