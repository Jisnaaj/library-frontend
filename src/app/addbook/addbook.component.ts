import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeriveService } from '../serive.service';
import { bookModel } from '../books/bookmodel';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
title:string="Add Your Books";
  constructor(private serve:SeriveService,private route:Router)
{ }
bookItem =new bookModel ( "" , "", "", "" , "");
  ngOnInit(): void {
    
  }
  newsubmit(){
    this.serve.addbooks(this.bookItem);
    console.log("item added");
    alert ("item is added");
    this.route.navigate(["book"]);
    
    }
    back(){
      localStorage.removeItem("token");
      this.route.navigate(['']);
      }

}
