import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpParams
} from "@angular/common/http";
import { customerData } from "src/app/models/customerData";
import { dailyData } from "src/app/models/dailyData";
import { empData } from "src/app/models/empData";
import { loanType } from "src/app/models/loanType";
import { bankType } from "src/app/models/bankType";
import { Observable } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: "root"
})
export class BaseServiceService {
  public baseUrl = "https://localhost:44341/api/";
  constructor(public http: HttpClient) {}

  public get(path: string, request: any) {
    const params = new HttpParams().set("processStep", request);
    return this.http.get<customerData[]>(this.baseUrl + path, { params });
  }

  public getById(path: string, id: any) {
    const params = new HttpParams().set("id", id);
    return this.http.get<customerData>(this.baseUrl + path, { params });
  }

  public getReferenceById(path: string, id: any) {
    const params = new HttpParams().set("customerId", id);
    return this.http.get<customerData[]>(this.baseUrl + path, { params });
  }

  public getForDailyData(path: string) {
    return this.http.get<dailyData[]>(this.baseUrl + path);
  }

  public getForEmpData(path: string) {
    return this.http.get<empData[]>(this.baseUrl + path);
  }

  public getForLoanData(path: string) {
    return this.http.get<loanType[]>(this.baseUrl + path);
  }

  public getForBankData(path: string) {
    return this.http.get<bankType[]>(this.baseUrl + path);
  }

  public post(path: string, request: any) {
    return this.http.post<customerData>(
      this.baseUrl + path,
      request,
      httpOptions
    );
  }

  public postDailyData(path: string, request: any) {
    return this.http
      .post<dailyData[]>(this.baseUrl + path, request, httpOptions)
      .subscribe(
        data => {
          console.log(data);
        },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            console.log("Client-side error occured.");
          } else {
            console.log("Server-side error occured.");
          }
        }
      );
  }

  public postExcelData(path: string, request: any): Observable<string> {
    return this.http.post<string>(this.baseUrl + path, request, httpOptions);
  }
  //.subscribe(
  //   data => {
  //     debugger;
  //     console.log(data);
  //   },
  //   (err: HttpErrorResponse) => {
  //     if (err.error instanceof Error) {
  //       console.log("Client-side error occured.");
  //     } else {
  //       console.log("Server-side error occured.");
  //     }
  //   }
  // );
}
