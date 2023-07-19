import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { StdDialogComponent } from "../std-dialog/std-dialog.component";
@Component({
  selector: "app-fake-home",
  templateUrl: "./fake-home.component.html",
  styleUrls: ["./fake-home.component.scss"],
})
export class FakeHomeComponent {
  constructor(private dialog: MatDialog) {}
  openHivDialog() {
    this.dialog.open(StdDialogComponent);
  }
}
