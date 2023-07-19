import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { MatToolbarModule } from "@angular/material/toolbar";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";
import { MatTabsModule } from "@angular/material/tabs";
import { PredComponent } from "./pred/pred.component";
import { NavComponent } from "./nav/nav.component";
import { IndexComponent } from "./index/index.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MatDividerModule } from "@angular/material/divider";
import { LoginComponent } from "./login/login.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NgIf } from "@angular/common";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FakeHomeComponent } from "./fake-home/fake-home.component";

import { NgFor } from "@angular/common";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatDialogModule } from "@angular/material/dialog";
import { MatCardModule } from "@angular/material/card";

import { MatSelectModule } from "@angular/material/select";
import { MatCheckboxModule } from "@angular/material/checkbox";
import {
  MatSlideToggleModule,
  _MatSlideToggleRequiredValidatorModule,
} from "@angular/material/slide-toggle";
import { CarouselComponent } from "./carousel/carousel.component";

import { StdDialogComponent } from "./std-dialog/std-dialog.component";
import { ChatBotComponent } from "./chat-bot/chat-bot.component";
import { PredFormComponent } from "./pred-form/pred-form.component";
import { ResultsComponent } from "./results/results.component";
import { SummeryComponent } from "./summery/summery.component";
import { WhoWeAreComponent } from "./aboutUsCrads/who-we-are/who-we-are.component";
import { PredictComponent } from "./aboutUsCrads/predict/predict.component";
import { BotComponent } from "./aboutUsCrads/bot/bot.component";

import { PreventDashComponent } from "./prevent-dash/prevent-dash.component";
import { FluidDetectorComponent } from "./fluid-detector/fluid-detector.component";
import { ColorPickerModule } from "ngx-color-picker";
import { ColorChromeModule } from "ngx-color/chrome";

@NgModule({
  declarations: [
    AppComponent,
    PredComponent,
    NavComponent,
    IndexComponent,
    SignUpComponent,
    DashboardComponent,
    LoginComponent,
    FakeHomeComponent,
    CarouselComponent,

    StdDialogComponent,
    ChatBotComponent,
    PredFormComponent,
    ResultsComponent,
    SummeryComponent,
    WhoWeAreComponent,
    PredictComponent,
    BotComponent,

    PreventDashComponent,
    FluidDetectorComponent,
  ],
  imports: [
    ColorChromeModule,
    ColorPickerModule,
    MatCardModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatMenuModule,
    MatDividerModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    NgIf,
    NgFor,
    MatGridListModule,
    MatSlideToggleModule,
    _MatSlideToggleRequiredValidatorModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
