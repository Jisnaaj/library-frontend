import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SeriveService } from './serive.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor( private rout:Router,private serv:SeriveService){

  }
  canActivate():boolean{
    if(this.serv.loggedin()){
      return true
    }
  else {
    this.rout.navigate(['books'])
    return false
  }  
  }
  
}
