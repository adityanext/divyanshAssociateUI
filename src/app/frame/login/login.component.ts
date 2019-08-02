import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrManager } from "ng6-toastr-notifications";
import { UserRoleComponent } from "../user-role/user-role/user-role.component";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  role: string;
  constructor(
    private router: Router,
    public toastr: ToastrManager,
    private userRole: UserRoleComponent
  ) {
    this.role = userRole.role;
  }

  ngOnInit() {}

  login() {
    if (this.username === "Admin" && this.password === "Admin") {
      this.toastr.successToastr("SUCESS: Logged in to system");
      this.userRole.role = "admin";
      this.router.navigate(["about"]);
    } else {
      this.toastr.errorToastr(
        "Error: Please enter correct user id and password or contact admin for more details"
      );
    }
  }
}
