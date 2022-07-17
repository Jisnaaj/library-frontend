import { HttpBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeriveService } from '../serive.service';
import { bookModel } from './bookmodel';
 
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  title:string="library";
  
  buk:bookModel[]|any;
  constructor(private serve:SeriveService,private route:Router) { }

  ngOnInit(): void {
    this.serve.getbooks().subscribe((data)=>{
          this.buk= JSON.parse(JSON.stringify(data));
    })
  }

  editProduct(product:any)
  {
    localStorage.setItem("editProductId", product._id.toString());
    this.route.navigate(['update']);

  }

  deleteProduct(product:any)
  {
    this.serve.deleteProduct(product._id)
      .subscribe((data) => {
        this.buk = this.buk.filter((p:any) => p !== product);
        alert("deleted successfully");
      })
    }
      back(){
      localStorage.removeItem("token");
      this.route.navigate(['']);
      }

  
}
