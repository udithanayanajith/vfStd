import { Component, OnInit } from "@angular/core";
import { AuthService } from "../_services/auth.service";
import { ChatService } from "../chatService/chat-service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  isLoggedIn = false;
  isFromResult = false;

  constructor(
    private authService: AuthService,
    private chatService: ChatService
  ) {
    this.authService.isLoggedIn$.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
    });
  }
  ngOnInit(): void {
    if (this.chatService.inputValue) {
      this.isFromResult = true;
    }
  }
  logout(): void {
    this.authService.logout();
  }
}
