import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { WhoWeAreComponent } from "../aboutUsCrads/who-we-are/who-we-are.component";
import { PredictComponent } from "../aboutUsCrads/predict/predict.component";
import { BotComponent } from "../aboutUsCrads/bot/bot.component";

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.scss"],
})
export class IndexComponent {
  constructor(private dialog: MatDialog) {}
  openHivDialog() {
    this.dialog.open(WhoWeAreComponent);
  }
    openPredDialog() {
    this.dialog.open(PredictComponent);
    }
    openBotDialog() {
    this.dialog.open(BotComponent);
  }
}
