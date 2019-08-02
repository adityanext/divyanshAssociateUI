import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from "@angular/material";
import { CustomerDataService } from "src/app/service/customer/customer-data.service";

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
    public dialog: MatDialog
  ) {}
  public statement: string;
  ngOnInit() {
    this.statement = this.data.statement;
  }

  public submit(processStep: number) {
    this.dialogRef.close();
  }

  public cancel() {
    this.dialogRef.close();
  }
}
