import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DailyDataComponent } from "./data/daily-data/daily-data.component";
import { UploadDailyDataComponent } from "./data/upload-daily-data/upload-daily-data.component";
import { CustomerDetailsComponent } from "./customer/customer-details/customer-details.component";
import { CustomerDetailsUploadComponent } from "./processStep/customer-details-upload/customer-details-upload.component";
import { LoanTypesComponent } from "./entity/loan/loan-types/loan-types.component";
import { BanksDetailComponent } from "./entity/bank/banks-detail/banks-detail.component";
import { LoginComponent } from "./frame/login/login.component";
import { HomeComponent } from "./frame/home/home/home.component";
import { AboutComponent } from "./frame/about/about/about.component";
import { LogoutComponent } from "./frame/logout/logout.component";
import { CustomerReferenceDetailsComponent } from "./processStep/customer-reference-details/customer-reference-details.component";

const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "logout",
    component: LogoutComponent
  },
  {
    path: "basicData/basicDataUpload",
    component: UploadDailyDataComponent
  },
  {
    path: "basicData/basicDataList",
    component: DailyDataComponent
  },
  {
    path: "customerDetails/customerData",
    component: CustomerDetailsComponent
  },
  {
    path: "customerDetails/customerRefrenceData",
    component: CustomerReferenceDetailsComponent
  },
  {
    path: "customerDetails/customerDataUpload",
    component: CustomerReferenceDetailsComponent
  },
  {
    path: "customerDetails/customerDocumentUpload",
    component: DailyDataComponent
  },
  {
    path: "customerDetails/bankVerification",
    component: DailyDataComponent
  },
  {
    path: "customerDetails/cibilVerification",
    component: DailyDataComponent
  },
  {
    path: "customerDetails/stampDuty",
    component: DailyDataComponent
  },
  {
    path: "customerDetails/loanDisbursal",
    component: DailyDataComponent
  },
  {
    path: "loanDetails/loanTypeList",
    component: LoanTypesComponent
  },
  {
    path: "bankDetails/bankList",
    component: BanksDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
