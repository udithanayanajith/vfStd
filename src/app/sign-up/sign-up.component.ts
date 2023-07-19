import { Component, OnInit } from "@angular/core";
import { AuthService } from "../_services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.scss"],
})
export class SignUpComponent implements OnInit {
  form: any = {
    username: null,
    email: null,
    password: null,
    retypepassword: null,
    cb1: null,
  };
  isSuccessful = false;
  isSignUpFailed = false;
  loading = false;
  errorMessage = "";

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    if (this.isSuccessful) {
      this.router.navigate(["login"]);
    }
  }

  onSubmit(): void {
    this.loading = true;
    const { username, password, retypepassword } = this.form;
    console.log(this.form);

    if (
      username !== null &&
      password !== null &&
      retypepassword !== null &&
      password === retypepassword
    ) {
      this.authService.register(username, password).subscribe({
        next: (data) => {
          console.log(data);
          this.isSuccessful = true;
          this.isSignUpFailed = false;
          this.loading = false;
          this.router.navigate(["login"]);
        },
        error: (err) => {
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
          this.loading = false;
        },
      });
    } else {
      alert("Error check re-entered password");
    }
  }
}
