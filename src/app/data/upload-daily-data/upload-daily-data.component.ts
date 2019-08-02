import { ToastrManager } from "ng6-toastr-notifications";
import { Component, OnInit } from "@angular/core";
import * as XLSX from "xlsx";
import { CustomerDataService } from "src/app/service/customer/customer-data.service";
import { dailyData } from "src/app/models/dailyData";

@Component({
  selector: "app-upload-daily-data",
  templateUrl: "./upload-daily-data.component.html",
  styleUrls: ["./upload-daily-data.component.scss"]
})
export class UploadDailyDataComponent implements OnInit {
  constructor(
    public toastr: ToastrManager,
    private customerDataServices: CustomerDataService
  ) {}

  ngOnInit() {}

  public data: Array<Array<any>>;
  public postData: dailyData[];

  onFileChange(evt: any) {
    /* wire up file reader */
    const target: DataTransfer = <DataTransfer>evt.target;
    if (target.files.length !== 1) throw new Error("Cannot use multiple files");
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      /* read workbook */
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: "binary" });

      /* grab first sheet */
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      /* save data */
      this.data = <Array<Array<any>>>(
        XLSX.utils.sheet_to_json(ws, { header: 1 })
      );
      this.postData = XLSX.utils.sheet_to_json<dailyData>(ws);
    };
    reader.readAsBinaryString(target.files[0]);
  }

  onSubmit() {
    if (
      this.data.length != 4 &&
      this.data[0][0] != "S.NO" &&
      this.data[0][1] != "Name" &&
      this.data[0][2] != "Primary Contact Number" &&
      this.data[0][3] != "Secondary Contact Number"
    ) {
      this.toastr.errorToastr(
        "Error: Please add correct excel file for upload, or you can download and update sample file: **Do not change first line"
      );
    } else {
      let da = this.customerDataServices.postExcelDataCollection(
        JSON.stringify(this.postData)
      );
      if (!!da) {
        this.ngOnInit();
        this.toastr.successToastr("Sucesfull uploaded");
      }
    }
  }
}
