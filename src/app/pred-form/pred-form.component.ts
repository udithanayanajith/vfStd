import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { PredResultsService } from "../resServise/pred-results.service";
import { ChatService } from "../chatService/chat-service";

interface Symptom {
  id: string;
  name: string;
  selected: boolean;
}
interface Durations {
  value: number;
  viewValue: string;
}

@Component({
  selector: "app-pred-form",
  templateUrl: "./pred-form.component.html",
  styleUrls: ["./pred-form.component.scss"],
})
export class PredFormComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private router: Router,
    private resultSdata: PredResultsService,
    private service: ChatService
  ) {}

  ngOnInit(): void {}
  selectedRadioValue: string = "";
  selectedGender: string = "";
  nameOfUser: string = "";
  ageOfUser: any;
  selectedDurationRange: any;
  contactsOfUser: any;
  selectedCondom: any;
  selectedHIV: any;

  isResult: boolean = false;

  predictResults: any;

  symptoms: Symptom[] = [
    { id: "symptomA", name: "Fever + sore throat", selected: false },
    { id: "symptomB", name: "Skin sores", selected: false },
    { id: "symptomC", name: "An unusual vaginal discharge", selected: false },
    { id: "symptomD", name: "Pain when passing urine.", selected: false },
    {
      id: "symptomE",
      name: "Pain in the lower abdominal area ",
      selected: false,
    },
    { id: "symptomF", name: "Swollen lymph nodes", selected: false },

    {
      id: "symptomG",
      name: "Small painless open sore in genital areas,skin or mouth",
      selected: false,
    },
    { id: "symptomH", name: "Pain when you have sex", selected: false },
    {
      id: "symptomI",
      name: "Itching or burning in or around your vagina.",
      selected: false,
    },
    { id: "symptomJ", name: "Painful periods.", selected: false },
    {
      id: "symptomK",
      name: "Painful blisters or ulcers",
      selected: false,
    },
    { id: "symptomL", name: "Diarrhea", selected: false },
    { id: "symptomM", name: "Weight loss", selected: false },
    { id: "symptomN", name: "Oral yeast infection", selected: false },
    {
      id: "symptomO",
      name: "A thick green or yellow discharge from the vagina or penis",
      selected: false,
    },
  ];
  durations: Durations[] = [
    { value: 1, viewValue: "0-2 weeks" },
    { value: 2, viewValue: "3 - 6 weeks" },
    { value: 3, viewValue: "6-12 weeks" },
    { value: 4, viewValue: "0-6 months" },
    { value: 5, viewValue: "6- 12 months" },
  ];

  selectedSymptoms: Symptom[] = [];

  gender: { name: string; value: string }[] = [
    { name: "Male", value: "1" },
    { name: "Female", value: "0" },
  ];

  condoms: { name: string; value: number }[] = [
    { name: "Yes", value: 1 },
    { name: "No", value: 0 },
  ];
  HIV: { name: string; value: number }[] = [
    { name: "Yes", value: 1 },
    { name: "No", value: 0 },
  ];
  submitForm() {
    const formData: {
      name: string;
      gender: string;
      checkboxValues: { [key: string]: number };
      symptomsList: { [key: string]: string };
      age: number;
      duration: number;
      sexContacts: number;
      isUsedComdoms: number;
      isTestHiv: number;
    } = {
      name: this.nameOfUser,
      gender: this.selectedGender,
      age: this.ageOfUser,
      checkboxValues: {},
      symptomsList: {},
      duration: this.selectedDurationRange,
      sexContacts: this.contactsOfUser,
      isUsedComdoms: this.selectedCondom,
      isTestHiv: this.selectedHIV,
    };
    this.symptoms.forEach((symptom) => {
      const isSelected = this.selectedSymptoms.includes(symptom);
      formData.checkboxValues[symptom.id] = isSelected ? 1 : 0;
      if (isSelected) {
        formData.symptomsList[symptom.id] = symptom.name;
      }
    });

    console.log("Data", formData);
    if (!formData.name) {
      console.log("Name is missing or invalid");
      alert("Name is missing or invalid");
    }

    // Check if gender has a value
    if (!formData.gender) {
      console.log("Gender is missing or invalid");
      alert("Gender is missing or invalid");
    }

    // Check if age is valid
    if (typeof formData.age !== "number" || formData.age <= 0) {
      console.log("Age is missing or invalid");
    }

    // Check if checkboxValues has at least one selected symptom
    const selectedSymptoms = Object.values(formData.checkboxValues).some(
      (value) => value === 1
    );
    if (!selectedSymptoms) {
      console.log("At least one symptom should be selected");
    }

    // Check if duration is valid
    if (typeof formData.duration !== "number" || formData.duration <= 0) {
      console.log("Duration is missing or invalid");
    }

    // Check if sexContacts is valid
    if (typeof formData.sexContacts !== "number" || formData.sexContacts <= 0) {
      console.log("Sex contacts is missing or invalid");
    }

    // Check if isUsedComdoms is valid
    if (
      typeof formData.isUsedComdoms !== "number" ||
      (formData.isUsedComdoms !== 0 && formData.isUsedComdoms !== 1)
    ) {
      console.log("isUsedComdoms is missing or invalid");
    }

    // Check if isTestHiv is valid
    if (
      typeof formData.isTestHiv !== "number" ||
      (formData.isTestHiv !== 0 && formData.isTestHiv !== 1)
    ) {
      console.log("isTestHiv is missing or invalid");
    }

    // Check if symptomsList has at least one symptom description
    const symptomDescriptions = Object.values(formData.symptomsList);
    if (
      symptomDescriptions.length === 0 ||
      symptomDescriptions.every((desc) => !desc)
    ) {
      console.log("At least one symptom description should be provided");
    } else {
      console.log("Data", formData);

      this.processData(formData);
    }
  }

  processData(data: any) {
    try {
      this.http.post("http://localhost:5000/pred", data).subscribe(
        (response: any) => {
          this.predictResults = response;
          console.log(this.predictResults.predictions, "Predictions in pred");

          this.resultSdata.setPredData(this.predictResults.predictions);
          console.log("Results from APIs", this.resultSdata);

          this.router.navigate(["/results"]);
        },
        (error) => {
          console.error(error);
        }
      );
    } catch {
      alert("Error");
    }
  }
  back() {
    this.service.setFulidColor(false);
  }
}
