import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ChatService {
  constructor() {}
  inputValue: string = "";
  // isFulidColor: boolean = false;
  private isFulidColor = new BehaviorSubject<boolean>(false);
  isFulidColor$ = this.isFulidColor.asObservable();
    setFulidColor(value: boolean): void {
    this.isFulidColor.next(value);
  }
}
