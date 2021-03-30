import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ms';
  fname: string = '';
  lname: any;
  age: any;
  gender: any;
  contact: any;
  Email: any;
  fnameError: boolean = false;
  lnameError: boolean = false;
  ageError: boolean = false;
  genderError: boolean = false;
  contactError: boolean = false;
  EmailError: boolean=false;

  nextClick() {
    if (this.fname === '' || this.fname === undefined) {
      this.fnameError = true;
    }
    if (this.lname === '' || this.lname === undefined) {
      this.lnameError = true;
    }
    if (this.age === '' || this.age === undefined) {
      this.ageError = true;
    }
    if (this.gender === '' || this.gender === undefined) {
      this.genderError = true;
    }
    if (this.contact === '' || this.contact === undefined) {
      this.contactError = true;
    }
    if (this.Email === '' || this.Email === undefined) {
      this.EmailError = true;
    }


  }

}
