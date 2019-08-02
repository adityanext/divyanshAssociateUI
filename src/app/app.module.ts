import { AboutComponent } from "./frame/about/about/about.component";
import { AfterSixMonthBTComponent } from "./processStep/after-six-month-bt/after-six-month-bt.component";
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { BanksDetailComponent } from "./entity/bank/banks-detail/banks-detail.component";
import { BankUploadComponent } from "./entity/bank/bank-upload/bank-upload.component";
import { BankVerificationComponent } from "./processStep/bank-verification/bank-verification.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { ButtonModule } from "primeng/button";
import { CibilVerificationComponent } from "./processStep/cibil-verification/cibil-verification.component";
import { ContactDetailsComponent } from "./frame/contact-details/contact-details.component";
import { CustomerDetailsComponent } from "./customer/customer-details/customer-details.component";
import { CustomerDetailsUploadComponent } from "./processStep/customer-details-upload/customer-details-upload.component";
import { CustomerDocumentsUploadComponent } from "./processStep/customer-documents-upload/customer-documents-upload.component";
import { CustomerReferenceDetailsComponent } from "./processStep/customer-reference-details/customer-reference-details.component";
import { DailyDataComponent } from "./data/daily-data/daily-data.component";
import { EmployeeListComponent } from "./entity/employee/employee-list/employee-list.component";
import { ErrorPageComponent } from "./common/error/error-page/error-page.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FooterComponent } from "./frame/footer/footer.component";
import { FormsModule } from "@angular/forms";
import { HeaderComponent } from "./frame/header/header.component";
import { HomeComponent } from "./frame/home/home/home.component";
import { HttpClientModule } from "@angular/common/http";
import { LeftBarComponent } from "./frame/left-bar/left-bar.component";
import { LoanDisbursalComponent } from "./processStep/loan-disbursal/loan-disbursal.component";
import { LoanTypesComponent } from "./entity/loan/loan-types/loan-types.component";
import { LoginComponent } from "./frame/login/login.component";
import { LogoutComponent } from "./frame/logout/logout.component";
import { MasterSearchComponent } from "./search/master-search/master-search.component";
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatInputModule,
  MatOptionModule,
  MatPaginatorModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule
} from "@angular/material";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MenuItemsComponent } from "./frame/menu-items/menu-items.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RightBarComponent } from "./frame/right-bar/right-bar.component";
import { TableModule } from "primeng/table";
import { ToastrModule } from "ng6-toastr-notifications";
import { UploadDailyDataComponent } from "./data/upload-daily-data/upload-daily-data.component";
import { UploadEmployeeComponent } from "./entity/employee/upload-employee/upload-employee.component";
import { UploadLoanTypesComponent } from "./entity/loan/upload-loan-types/upload-loan-types.component";
import { UserRoleComponent } from "./frame/user-role/user-role/user-role.component";
import { CustomerReferenceDataComponent } from "./customer/customer-refrence-data/customer-reference-data/customer-reference-data.component";
@NgModule({
  declarations: [
    AppComponent,
    DailyDataComponent,
    UploadDailyDataComponent,
    CustomerDetailsComponent,
    CustomerDetailsUploadComponent,
    CustomerDocumentsUploadComponent,
    BankVerificationComponent,
    CibilVerificationComponent,
    LoanDisbursalComponent,
    AfterSixMonthBTComponent,
    MasterSearchComponent,
    LoanTypesComponent,
    UploadLoanTypesComponent,
    BanksDetailComponent,
    BankUploadComponent,
    EmployeeListComponent,
    UploadEmployeeComponent,
    HeaderComponent,
    FooterComponent,
    LeftBarComponent,
    RightBarComponent,
    ContactDetailsComponent,
    MenuItemsComponent,
    LoginComponent,
    LogoutComponent,
    HomeComponent,
    AboutComponent,
    ErrorPageComponent,
    CustomerReferenceDetailsComponent,
    CustomerReferenceDataComponent
  ],
  entryComponents: [
    AppComponent,
    DailyDataComponent,
    UploadDailyDataComponent,
    CustomerDetailsComponent,
    CustomerDetailsUploadComponent,
    CustomerDocumentsUploadComponent,
    CustomerReferenceDataComponent,
    BankVerificationComponent,
    CibilVerificationComponent,
    LoanDisbursalComponent,
    AfterSixMonthBTComponent,
    MasterSearchComponent,
    LoanTypesComponent,
    UploadLoanTypesComponent,
    BanksDetailComponent,
    BankUploadComponent,
    EmployeeListComponent,
    UploadEmployeeComponent,
    HeaderComponent,
    FooterComponent,
    LeftBarComponent,
    RightBarComponent,
    ContactDetailsComponent,
    MenuItemsComponent,
    LoginComponent,
    LogoutComponent,
    HomeComponent,
    AboutComponent,
    ErrorPageComponent,
    CustomerReferenceDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatRippleModule,
    MatMenuModule,
    AngularFontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MatButtonModule,
    MatCardModule,
    ButtonModule,
    TableModule,
    HttpClientModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatRadioModule,
    MatOptionModule,
    MatSelectModule,
    MatCheckboxModule,
    MatStepperModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatTabsModule,
    MatOptionModule,
    MatSelectModule,
    MatCheckboxModule,
    MatStepperModule,
    ToastrModule.forRoot()
  ],
  exports: [MatStepperModule, MatSortModule, FlexLayoutModule, MatDialogModule],
  providers: [UserRoleComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
