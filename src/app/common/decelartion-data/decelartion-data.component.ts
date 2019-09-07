import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from "@angular/material";
import { CustomerDataService } from "src/app/service/customer/customer-data.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-decelartion-data",
  templateUrl: "./decelartion-data.component.html",
  styleUrls: ["./decelartion-data.component.scss"]
})
export class DecelartionDataComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DecelartionDataComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private customerDataServices: CustomerDataService,
    public dialog: MatDialog,
    private router:Router
  ) {}

  public statement: string;
  
  ngOnInit() {
    this.statement = this.data.statement;
  }

  public submit() {
    return this.customerDataServices.updateProcessStep(this.data.customerId,this.data.processStep).subscribe(res => {
      this.dialogRef.close();
    });
    
  }

  public cancel() {
    this.dialogRef.close();
  }
}
