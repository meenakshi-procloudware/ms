import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ms';
  fname:string = '';
  lname:any;
  age:any;
  gender:any;
  contact:any;
  email:any;
  // fnameError:boolean;
  nextClick(){
    console.log("fname",this.fname);
    if(this.fname=== ''|| this.fname === undefined){
    // this.fnameError = true;
    }
  }
  
}


