import { Component, OnInit, Inject } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CustomerDataService } from "../../../app/service/customer/customer-data.service";
import { customerData } from "../../../app/models/customerData";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrManager } from "ng6-toastr-notifications";
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from "@angular/material";
import { loanType } from "../../../app/models/loanType";

@Component({
  selector: "app-customer-details-upload",
  templateUrl: "./customer-details-upload.component.html",
  styleUrls: ["./customer-details-upload.component.scss"]
})
export class CustomerDetailsUploadComponent implements OnInit {
  public customerDataDetails: customerData;
  public response: string;
  constructor(
    public dialogRef: MatDialogRef<CustomerDetailsUploadComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _formBuilder: FormBuilder,
    public toastr: ToastrManager,
    private customerDataServices: CustomerDataService,
    private router: Router
  ) {}

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  firstStep: any[];
  public loanTypes: loanType[];
  
  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      customerName: [null, Validators.required],
      buisnessName: [null, Validators.required],
      loan: [null, Validators.required],
      buisnessAddress: [null, Validators.required],
      permanentAddress: [null, Validators.required],
      primaryContactNumber: [null, Validators.required],
      secondaryContactNumber: [null, Validators.required],
      buisnessProofAnyRegistration: [null, Validators.required],
      propertyValuation: [null, Validators.required],
      iTR3Year: [null, Validators.required],
      visitBy: [null, Validators.required],
      companyName: [null, Validators.required],
      companyAddress: [null, Validators.required],
      panCard: [null, Validators.required],
      referBy: [null, Validators.required],
      lineOfBuisness: [null, Validators.required],
      workInPeriod: [null, Validators.required],
      monthlyIncome: [null, Validators.required],
      netMonthlyIncome: [null, Validators.required],
      loanAmount: [null, Validators.required],
      otherFaimlyIncome: [null, Validators.required],
      currentAccountingAndSavingAccount: [null, Validators.required],
      otherBankLoan: [null, Validators.required],
      bankName: ["NA", Validators.required],
      otherLoanAmount: [0, Validators.required],
      otherLoanEmi: [0, Validators.required],
      otherLoanPeriod: [0, Validators.required],
      processStep: [1, Validators.required],
      customerId: [this.data.customerId, Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ["", Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ["", Validators.required]
    });
    this.fourthFormGroup = this._formBuilder.group({});
	
	this.getLoanData();
  }

  private getCustomerDetailsById(customerId: number) {
    return this.customerDataServices
      .getCustomerDataById(customerId)
      .subscribe(res => {
        this.customerDataDetails = res as customerData;
      });
  }
  
  public getLoanData() {
      return this.customerDataServices.loanTypeDetails.subscribe(res => {
        this.loanTypes = res;
      });
    }

  //name :FormControl;
  public postFormValue() {
    this.firstStep = this.firstFormGroup.value;
    const request = JSON.stringify(this.firstStep);
    if (!this.data.isReference) {
      this.customerDataServices.postCustomerData(request).subscribe(res => {
        this.response = res as any;
        if (this.response !== null) {

          this.toastr.successToastr("Sucessfully uploaded basic details");
          this.dialogRef.close();
          this.router.navigate(["customerDetails/customerRefrenceData"]);
        } else {
          this.toastr.errorToastr("Error: Please enter correct context");
        }
      });
    } else {
      this.customerDataServices
        .postCustomerRefernceData(request)
        .subscribe(res => {
          this.response = res as any;
          if (this.response !== null) {
            this.toastr.successToastr("Sucessfully uploaded reference data");
            this.dialogRef.close();
          } else {
            this.toastr.errorToastr("Error: Please enter correct context");
          }
        });
    }
  }
}
