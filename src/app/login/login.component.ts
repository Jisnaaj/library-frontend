import { Component, OnInit } from '@angular/core';
import { SeriveService } from '../serive.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
url="./assets/images/user.png";
title = 'project';
    user={
      email:'',
      pass:''
  }
  
  constructor(private serv:SeriveService,private route:Router) { }

  ngOnInit(): void {
  }
  onsubmit(data:any){
    // // alert((JSON.stringify(this.user)))
    this.serv.onsubmit(data).subscribe(res=>{
      localStorage.setItem('token',res.token)
      this.route.navigate(["book"]);
    })
    console.log(data);
    
  }
}
