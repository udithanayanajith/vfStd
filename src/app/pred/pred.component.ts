import { Component, OnInit } from "@angular/core";
import { ChatService } from "../chatService/chat-service";

@Component({
  selector: "app-pred",
  templateUrl: "./pred.component.html",
  styleUrls: ["./pred.component.scss"],
})
export class PredComponent implements OnInit {
  isLoggedIn = false;
  isLoginFailed = false;
  isFulidColor = false;
  constructor(private service: ChatService) {
    this.service.isFulidColor$.subscribe((isFulidColor) => {
      this.isFulidColor = isFulidColor;
    });
  }

  ngOnInit(): void {
    // console.log("isFuid in predDash", this.service.isFulidColor);
    // this.isFulidColor = this.service.isFulidColor;
  }
}
