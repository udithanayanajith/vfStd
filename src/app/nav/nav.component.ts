import { Component } from "@angular/core";
import { AuthService } from "../_services/auth.service";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"],
})
export class NavComponent {
  isLoggedIn = false;

  constructor(private authService: AuthService) {
    this.authService.isLoggedIn$.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
    });
  }
  logout(): void {
    this.authService.logout();
  }
}
