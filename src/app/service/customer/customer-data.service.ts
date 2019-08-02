import { bankType } from "src/app/models/bankType";
import { BaseServiceService } from "../base/base-service.service";
import { empData } from "src/app/models/empData";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { loanType } from "src/app/models/loanType";
import { Observable } from "rxjs/Rx";
import { PARAMETERS } from "@angular/core/src/util/decorators";
import "rxjs/Rx";

@Injectable({
  providedIn: "root"
})
export class CustomerDataService extends BaseServiceService {
  constructor(public http: HttpClient) {
    super(http);
  }

  ngOnInit() {
    console.log("hello");
    this.getEmpData();
    this.getLoanTypeData();
    this.getBankTypeData();
  }

  // Employee data details
  private empDataDetails: Observable<empData[]>;
  private loanTypeDataDetails: Observable<loanType[]>;
  private bankTypeDataDetails: Observable<bankType[]>;

  public get epmloyeeDetails(): Observable<empData[]> {
    if (this.empDataDetails !== undefined) {
      return this.empDataDetails;
    } else {
      this.getEmpData();
      return this.empDataDetails;
    }
  }

  private getEmpData() {
    this.empDataDetails = this.getForEmpData("empData/all");
    return this.empDataDetails;
  }
  // End Employee data details.

  // Loan type data details.

  public get loanTypeDetails(): Observable<loanType[]> {
    if (this.loanTypeDataDetails !== undefined) {
      return this.loanTypeDataDetails;
    } else {
      this.getLoanTypeData();
      return this.loanTypeDataDetails;
    }
  }

  private getLoanTypeData() {
    this.loanTypeDataDetails = this.getForLoanData("common/loanData/all");
    return this.loanTypeDataDetails;
  }
  // End Loan Type data details

  // Bank type data details
  public get bankTypeDetails(): Observable<bankType[]> {
    if (this.bankTypeDataDetails !== undefined) {
      return this.bankTypeDataDetails;
    } else {
      this.getBankTypeData();
      return this.bankTypeDataDetails;
    }
  }
  private getBankTypeData() {
    this.bankTypeDataDetails = this.getForBankData("common/bankData/all");
    debugger;
    return this.bankTypeDataDetails;
  }

  // End Bank type data details

  public getCustomerData(processStep: number) {
    return this.get("customerdata/all", processStep);
  }

  public getCustomerDataById(id: number) {
    return this.getById("customerdata/getById", id);
  }

  public getCustomerReferenceData(customerId: number) {
    return this.getReferenceById("customerData/getReferenceById", customerId);
  }

  public getDailyData() {
    return this.getForDailyData("dailyData/all");
  }

  public getCustomerDataWithId(processStep: number) {
    let relativeUrl = "customerdata/all";
    return this.get(relativeUrl, processStep);
  }

  public postCustomerData(request: any) {
    let relativeUrl = "customerdata/saveData";
    return this.post(relativeUrl, request);
  }

  public postCustomerRefernceData(request: any) {
    let relativeUrl = "customerdata/saveRefernceData";
    return this.post(relativeUrl, request);
  }
  public postDailyDataCollection(request: any) {
    let relativeUrl = "dailyData/saveData";
    return this.postDailyData(relativeUrl, request);
  }

  public postExcelDataCollection(request: any) {
    let relativeUrl = "dailyData/saveExcelData";
    return this.postExcelData(relativeUrl, request).subscribe((res: string) => {
      res;
    });
  }
}
