import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PredComponent } from "./pred/pred.component";
import { IndexComponent } from "./index/index.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LoginComponent } from "./login/login.component";
import { FakeHomeComponent } from "./fake-home/fake-home.component";
import { ResultsComponent } from "./results/results.component";
import { SummeryComponent } from "./summery/summery.component";
import { ChatBotComponent } from "./chat-bot/chat-bot.component";

const routes: Routes = [
  { path: "pred", component: PredComponent },
  { path: "index", component: IndexComponent },
  { path: "sign", component: SignUpComponent },
  { path: "dash", component: DashboardComponent },
  { path: "login", component: LoginComponent },
  { path: "chatbot", component: ChatBotComponent },
  { path: "home", component: FakeHomeComponent },
  { path: "summery", component: SummeryComponent },
  { path: "results", component: ResultsComponent, data: { predictions: null } },
  {
    path: "dashboard",
    component: DashboardComponent,
    children: [
      { path: "", redirectTo: "about-us", pathMatch: "full" },
      { path: "about-us", component: IndexComponent },
      { path: "chat-bot", component: ChatBotComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
