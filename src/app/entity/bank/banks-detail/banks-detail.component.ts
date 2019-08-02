import { Component, OnInit, ViewChild } from "@angular/core";
import { bankType } from "src/app/models/bankType";
import { CustomerDataService } from "src/app/service/customer/customer-data.service";
import { MatTableDataSource, MatSort, MatPaginator } from "@angular/material";

@Component({
  selector: "app-banks-detail",
  templateUrl: "./banks-detail.component.html",
  styleUrls: ["./banks-detail.component.scss"]
})
export class BanksDetailComponent implements OnInit {
  constructor(private customerDataServices: CustomerDataService) {}

  displayedColumns: string[] = ["id", "bankName", "bankType"];

  public dataSource = new MatTableDataSource<bankType>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.getBankData();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  };

  public getBankData() {
    return this.customerDataServices.bankTypeDetails.subscribe(res => {
      this.dataSource.data = res as bankType[];
      debugger;
    });
  }
}
