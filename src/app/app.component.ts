import { Component, HostListener } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "My STD";
  constructor(private router: Router) {}

  @HostListener("window:beforeunload")
  clearSessionStorageAndLogout() {
    sessionStorage.clear();
    localStorage.clear();
    this.logout();
  }

  logout() {
    // Perform logout actions, such as navigating to the logout page
    this.router.navigate(["/login"]);
  }
}
