import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SeriveService {

  item= {
    
    name:'',
    authorname:'',
    price:'',
    starRating:'',
    image:''}
  constructor(public http:HttpClient) {
      
  }

 onsubmit(user:any){

    return this.http.post<any>("http://localhost:3002/login",user)
    }

    getbooks(){
      return  this.http.get("http://localhost:3002/book");
      };

      
     loggedin(){
      return !!localStorage.getItem('token')
    }

    addbooks=(item:any)=>{
      return  this.http.post("http://localhost:3002/addbook",{item})
     .subscribe((data=>{console.log(data)}));
    }
    
    getProduct(id:any){
      return this.http.get("http://localhost:3002/"+id);
    }

    editProduct(product:any)
  {
    console.log('client update')
    return this.http.put("http://localhost:3002/update",product)
    .subscribe(data =>{console.log(data)})
  }

  deleteProduct(id:any)
  {

    return this.http.delete("http://localhost:3002/remove/"+id)

  }
  }

  
