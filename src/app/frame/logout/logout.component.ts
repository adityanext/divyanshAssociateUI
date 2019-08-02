import { Component, OnInit } from "@angular/core";
import { UserRoleComponent } from "../user-role/user-role/user-role.component";
import { Router } from "@angular/router";

@Component({
  selector: "app-logout",
  templateUrl: "./logout.component.html",
  styleUrls: ["./logout.component.scss"]
})
export class LogoutComponent implements OnInit {
  constructor(private router: Router, private userRole: UserRoleComponent) {
    this.userRole.role = "";
    this.router.navigate([""]);
  }

  ngOnInit() {}
}
