import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, BehaviorSubject } from "rxjs";
import { Router } from "@angular/router";

// const AUTH_API = 'http://localhost:8080/api/auth/';
const AUTH_API = "https://orange-wildebeest-hem.cyclic.app/api/";
// const AUTH_API = "http://localhost:3000/api/";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  constructor(private http: HttpClient, private router: Router) {
    const isLoggedIn = this.getToken() !== null;
    this.setLoggedIn(isLoggedIn);
  }

  setLoggedIn(value: boolean): void {
    this.isLoggedInSubject.next(value);
  }

  logout(): void {
    this.clearToken();
    this.clearLocalStorage();
    this.setLoggedIn(false);
    this.router.navigate(["login"]);
  }
  saveToken(token: string): void {
    localStorage.setItem("token", token);
  }

  getToken(): string | null {
    return localStorage.getItem("token");
  }

  clearToken(): void {
    localStorage.removeItem("token");
  }
  clearLocalStorage(): void {
    localStorage.clear();
    sessionStorage.clear();
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + "userLogin",
      {
        username,
        password,
      },
      httpOptions
    );
  }

  register(username: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + "userSignup",
      { password, username },
      httpOptions
    );
  }
}
