import { Component, OnInit } from "@angular/core";

import { PredResultsService } from "../resServise/pred-results.service";
import { Router } from "@angular/router";
import { ChatService } from "../chatService/chat-service";

@Component({
  selector: "app-results",
  templateUrl: "./results.component.html",
  styleUrls: ["./results.component.scss"],
})
export class ResultsComponent implements OnInit {
  predictions: any = [];
  nameOfUser: string = "";
  ageOfUser: any;
  sexOfUser: any;
  diagnosisOfUser: any;
  nameOfDiagnosisOfUser: string = "";
  sexDuration: any;
  hivTest: any;
  isUsedComdoms: any;

  constructor(
    private predData: PredResultsService,
    private router: Router,
    private chatService: ChatService
  ) {}

  ngOnInit() {
    this.predictions = this.predData.getPredData();
    // this.predictions = {
    //   diagnosis: 1,
    //   userData: {
    //     age: 56,
    //     checkboxValues: {
    //       symptomA: 1,
    //       symptomB: 1,
    //       symptomC: 0,
    //       // ...
    //     },
    //     duration: 2,
    //     gender: 1,
    //     isTestHiv: 0,
    //     isUsedComdoms: 1,
    //     name: "Uditha",
    //     sexContacts: 12,
    //     symptomsList: {
    //       symptomA: "Fever + sore throat",
    //       symptomB: "Skin sores",
    //       symptomC: "Fever + sore throat",
    //       symptomD: "Skin sores",
    //       symptomE: "Fever + sore throat",
    //       symptomG: "Skin sores",
    //       symptomF: "Fever + sore throat",
    //       symptomH: "Skin sores",
    //     },
    //   },
    // };
    this.nameOfUser = this.predictions.userData.name;
    this.ageOfUser = this.predictions.userData.age;
    // Male Female
    if (this.predictions.userData.gender == 1) {
      this.sexOfUser = "Male";
    } else {
      this.sexOfUser = "Female";
    }
    // Diagnosis
    if (this.predictions.diagnosis == 1) {
      this.nameOfDiagnosisOfUser = "HIV/AIDS";
    } else if (this.predictions.diagnosis == 2) {
      this.nameOfDiagnosisOfUser = "Herpes simples";
    } else if (this.predictions.diagnosis == 3) {
      this.nameOfDiagnosisOfUser = "Chlamydia";
    } else if (this.predictions.diagnosis == 4) {
      this.nameOfDiagnosisOfUser = "Gonorrhoea";
    } else if (this.predictions.diagnosis == 5) {
      this.nameOfDiagnosisOfUser = "Syphilies";
    }

    //Sex Duration
    if (this.predictions.diagnosis == 1) {
      this.sexDuration = "0-2 weeks";
    } else if (this.predictions.diagnosis == 2) {
      this.sexDuration = "3-6 weeks";
    } else if (this.predictions.diagnosis == 3) {
      this.sexDuration = "6-12 weeks";
    } else if (this.predictions.diagnosis == 4) {
      this.sexDuration = "0-6 months";
    } else if (this.predictions.diagnosis == 5) {
      this.sexDuration = "6- 12 months";
    }

    //Is Hiv Test
    if (this.predictions.userData.isTestHiv == 1) {
      this.hivTest = "Yes";
    } else {
      this.hivTest = "No";
    }

    //Is Hiv Test
    if (this.predictions.userData.isUsedComdoms == 1) {
      this.isUsedComdoms = "Yes, I used condoms at my last sex";
    } else {
      this.isUsedComdoms = "No, I forgot to use a condom";
    }

    this.diagnosisOfUser = "Your diaognes is: " + this.nameOfDiagnosisOfUser;
    console.log(this.predictions, "this.predictions");

    console.log(this.predData.getPredData());
    console.log("Data Object", this.predictions);
  }

  goToChatBot(): void {
    this.chatService.inputValue = `I have ${this.nameOfDiagnosisOfUser}, can you help me with it?`;
    this.router.navigate(["/chatbot"]);
  }
  exportAsPDF(): void {
    const symptomsHTML = Object.entries(this.predictions.userData.symptomsList)
      .map(
        ([key, value]) => `
  <li>${value}</li>
`
      )
      .join("");

    const printWindow = window.open("", "_blank");
    const reportContent = document.getElementById("report-content")?.outerHTML;
    const printDocument = `
<html>
  <head>
    <title>Let's live STD Result</title>
  </head>
  <style>
    .wufoo {
      font-family: "Lucida Grande", "Lucida Sans Unicode", Tahoma, sans-serif;
      letter-spacing: 0.01em;
    }
    .wufoo li {
      width: 80%;
    }
    .info {
      display: inline-block;
      clear: both;
      width: 100%;
      margin: 0 0 5px 0;
      padding: 0 1% 1.1em 1%;
      border-bottom: 1px dotted #ccc;
    }

    .info h2 {
      font-weight: normal;
      font-size: 160%;
      margin: 0 0 5px 0;
      clear: left;
    }
    .info div {
      font-size: 95%;
      line-height: 135%;
      color: #555;
      width: 100%;
    }
    form ul {
      margin: 0;
      width: 90%;
      padding: 0;
      list-style-type: none;
    }

    form li {
      margin: 0;
      padding: 6px 1% 9px 1%;
      clear: both;
      background-color: transparent;
      position: relative;
      -webkit-transition: background-color 350ms ease-out;
      -moz-transition: background-color 350ms ease-out;
      -o-transition: background-color 350ms ease-out;
      transition: background-color 350ms ease-out;
    }

    label.desc {
      font-size: 95%;
      font-weight: bold;
      color: #222;
      line-height: 150%;
      margin: 0;
      padding: 0 0 3px 0;
      border: none;
      display: block;
      white-space: normal;
      width: 100%;
    }

    body {
      margin: 17px 0 15px 0;
      padding: 0;
      text-align: center;
      font-size: small;
      font-family: "Lucida Grande", Tahoma, Arial, Verdana, sans-serif;
    }

    #container {
      text-align: left;
      background: #fff;
      border: 1px solid #ccc;
      -webkit-box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 5px;
      -moz-box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 5px;
      -o-box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 5px;
      box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 5px;
    }
    #container {
      margin: 0 auto 10px auto;
      width: 640px;
    }
    form.wufoo {
      margin: 20px 14px 0 14px;
      padding: 0 0 20px 0;
      position: relative;
    }
    #logo {
      margin: 0;
      padding: 0;
      min-height: 0;
      text-align: center;
    }
    th {
      background-color: #f2f2f2;
    }
    table#formTable {
      border-collapse: separate;
      width: 100%;
    }
    td {
      padding: 8px;
      
    }
    td.field-label {
      font-weight: bold;
    }
        tr {
      border-bottom: 5px solid #ddd;
    }
  </style>

  <body id="public">
    <div id="container" class="ltr">
      <h3 id="logo">
        Let's Live Report
      </h3>

      <form class="wufoo topLabel page">
        <header id="header" class="info">
          <h2>
            Hi ${this.nameOfUser}
          </h2>
          <div>Please note that this is system genarated report!</div>
        </header>

        <table>
          <tr>
            <td>
              <label class="desc" id="title1" for="Field1">
                Name
              </label>
              <div class="info"></div>
            </td>
            <td>
              ${this.nameOfUser}
              <div class="info"></div>
            </td>
          </tr>
          <tr>
            <td>
              <label class="desc" id="title1" for="Field1">
                Age
              </label>
              <div class="info"></div>
            </td>
            <td>
              ${this.ageOfUser}
              <div class="info"></div>
            </td>
          </tr>
          <tr>
            <td>
              <label class="desc" id="title1" for="Field1">
                Gender
              </label>
              <div class="info"></div>
            </td>
            <td>
              ${this.sexOfUser}
              <div class="info"></div>
            </td>
          </tr>
          <tr>
            <td>
              <label class="desc" id="title1" for="Field1">
                Durations Of symptoms
              </label>
              <div class="info"></div>
            </td>
            <td>
              ${this.sexDuration}
              <div class="info"></div>
            </td>
          </tr>
          <tr>
            <td>
              <label class="desc" id="title1" for="Field1">
                Used condoms at last sex
              </label>
              <div class="info"></div>
            </td>
            <td>
              ${this.isUsedComdoms}
              <div class="info"></div>
            </td>
          </tr>
          <tr>
            <td>
              <label class="desc" id="title1" for="Field1">
                Did have a HIV test
              </label>
              <div class="info"></div>
            </td>
            <td>
              ${this.hivTest}
              <div class="info"></div>
            </td>
          </tr>
          <tr>
            <td>
              <label class="desc" id="title1" for="Field1">
                Symptoms
              </label>
              
            </td>
            <td>
              <ul>
                <li>
                  ${symptomsHTML}
                </li>
              </ul>
            </td>
          </tr>
        </table>
      </form>
    </div>

    <b
      style="
        display: block !important;
        visibility: visible !important;
        text-indent: 0 !important;
        position: static !important;
        height: auto !important;
        width: auto !important;
        overflow: auto !important;
        font-weight: normal;
        font-size: 9px;
        color: #777;
        padding: 0 0 0 3px;
      "
      >Designed By Let's Live Web Application</b
    >
  </body>
</html>



  `;
    printWindow?.document.open();
    printWindow?.document.write(printDocument);
    printWindow?.document.close();
    printWindow?.focus();
    printWindow?.print();
    printWindow?.close();
  }
}
