import { Component, OnInit } from "@angular/core";
import { UserRoleComponent } from "../user-role/user-role/user-role.component";

@Component({
  selector: "app-menu-items",
  templateUrl: "./menu-items.component.html",
  styleUrls: ["./menu-items.component.scss"]
})
export class MenuItemsComponent implements OnInit {
  constructor(private userRole: UserRoleComponent) {}

  ngOnInit() {}

  public isAdmin(): boolean {
    if (this.userRole.role == "admin") {
      return true;
    } else {
      return false;
    }
  }
}
