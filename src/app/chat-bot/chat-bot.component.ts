import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders, HttpParams } from "@angular/common/http";
import { ChatService } from "../chatService/chat-service";
import { Router } from "@angular/router";

@Component({
  selector: "app-chat-bot",
  templateUrl: "./chat-bot.component.html",
  styleUrls: ["./chat-bot.component.scss"],
})
export class ChatBotComponent implements OnInit {
  messages: any[] = [];
  userInput: string = "";
  isFromResult = false;

  constructor(
    private http: HttpClient,
    private chatService: ChatService,
    private router: Router
  ) {}

  ngOnInit() {
    this.userInput = this.chatService.inputValue;
    if (this.userInput) {
      this.isFromResult = true;
      this.sendMessage();
      this.chatService.inputValue = "";
    }
  }

  sendMessage() {
    if (this.userInput) {
      this.messages.push({ content: this.userInput, type: "user" });

      const headers = new HttpHeaders();
      const params = new HttpParams().set("msg", this.userInput);

      this.http
        .get<any>("http://localhost:5000/get", { headers, params })
        .subscribe((response) => {
          const botResponse = response.response;
          this.messages.push({ content: botResponse, type: "bot" });
          this.userInput = "";
        });
    }
  }
  backToResults(): void {
    this.router.navigate(["/results"]);
  }
}
