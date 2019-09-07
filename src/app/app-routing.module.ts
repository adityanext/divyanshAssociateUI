import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DailyDataComponent } from "./data/daily-data/daily-data.component";
import { UploadDailyDataComponent } from "./data/upload-daily-data/upload-daily-data.component";
import { CustomerDetailsComponent } from "./customer/customer-details/customer-details.component";
import { LoanTypesComponent } from "./entity/loan/loan-types/loan-types.component";
import { BanksDetailComponent } from "./entity/bank/banks-detail/banks-detail.component";
import { LoginComponent } from "./frame/login/login.component";
import { HomeComponent } from "./frame/home/home/home.component";
import { AboutComponent } from "./frame/about/about/about.component";
import { LogoutComponent } from "./frame/logout/logout.component";
import { CustomerReferenceDetailsComponent } from "./processStep/customer-reference-details/customer-reference-details.component";
import { CustomerDocumentsUploadComponent } from "./processStep/customer-documents-upload/customer-documents-upload.component";

import { DocumentListForDisplayComponent } from "./data/document-list-for-display/document-list-for-display.component";
import { BankVerificationComponent } from "./processStep/bank-verification/bank-verification.component";
import { CibilVerificationComponent } from "./processStep/cibil-verification/cibil-verification.component";
import { StampDutyComponent } from "./processStep/stamp-duty/stamp-duty.component";
import { LegalTechnicalComponent } from "./processStep/legal-technical/legal-technical.component";
import { LoanDisbursalComponent } from "./processStep/loan-disbursal/loan-disbursal.component";
import { ClosureMoveToBTComponent } from "./processStep/closure-move-to-bt/closure-move-to-bt.component";
import { MasterSearchComponent } from "./search/master-search/master-search.component";

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
    component: CustomerDocumentsUploadComponent
  },
  {
    path: "customerDetails/bankVerification",
    component: BankVerificationComponent
  },
  {
    path: "customerDetails/cibilVerification",
    component: CibilVerificationComponent
  },
  {
    path: "customerDetails/stampDuty",
    component: StampDutyComponent
  },
  {
    path:"customerDetails/Legal&Technical",
    component:LegalTechnicalComponent
  },
  {
    path: "customerDetails/loanDisbursal",
    component: LoanDisbursalComponent
  },
  {
    path: "customerDetails/closeLoan",
    component: ClosureMoveToBTComponent
  },
  {
    path: "loanDetails/loanTypeList",
    component: LoanTypesComponent
  },
  {
    path: "bankDetails/bankList",
    component: BanksDetailComponent
  },
  {
    path:"loanDetails/documentForloanType",
    component:DocumentListForDisplayComponent
  },
  {
    path:"searchForAll",
    component:MasterSearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
