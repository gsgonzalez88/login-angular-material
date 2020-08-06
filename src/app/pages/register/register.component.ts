import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/authentication/auth.service";
import { NgForm, FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  
  hide = true;
  
  constructor(private authService: AuthService) {}

  ngOnInit() {}
  signUp(form: NgForm) {
    if (form.invalid) {
      console.log("invalid");
      return;
    }
    this.authService.createUser(form.value.email, form.value.password);
  }
}
