import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class PredResultsService {
  predData: any;

  constructor() {}
  setPredData(data: any) {
    this.predData = data;
  }
  getPredData() {
    return this.predData;
  }
}
