import { Component, OnInit } from '@angular/core';
// import { FormBuilder } from '@angular/forms';
// import { Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(private rout:Router){}

    title = 'project';
    user={
      fname:'',
      lname:'',
      email:'',
      pass:''
  }
  onsubmit(){
    alert((JSON.stringify(this.user)))
    this.rout.navigate(['login'])
  }
  ngOnInit(): void {
    
  }
  }
