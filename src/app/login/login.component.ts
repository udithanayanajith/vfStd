import { Component, OnInit } from "@angular/core";
import { AuthService } from "../_services/auth.service";
import { TokenStorageService } from "../_services/token-storage.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null,
  };
  isLoggedIn = false;
  isLoginFailed = false;
  loading = false;

  errorMessage = "";
  roles: string[] = [];

  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
      this.router.navigate(["home"]);
    }
  }

  onSubmit(): void {
    this.loading = true;
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe({
      next: (data) => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.authService.setLoggedIn(true);
        this.roles = this.tokenStorage.getUser().roles;
        this.loading = false;
        this.router.navigate(["dash"]);
      },
      error: (err) => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
        this.loading = false;
      },
    });
  }

  reloadPage(): void {
    window.location.reload();
  }
}
