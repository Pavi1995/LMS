import { Component } from "@angular/core";
import { ServerComponent } from "./server/server.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  signup = [];

  /*onSignUpAdded(
    firstname: string,
    email: string,
    password: string,
    retypepassword: string,
    date: Date,
    gender: string
  ) {
    this.signup.push({
      firstname: this.firstname,
      email: this.email,
      password: this.password,
      retypepassword: this.retypepassword,
      date: this.date,
      gender: this.gender
    });
  }*/
  /* home: boolean;
  about: boolean;

  onHome() {
    this.home = true;
    this.about = false;
  }

  onAboutUs() {
    this.about = true;
    this.home = false;
  }*/
}
