import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './auth.guard';

import { AddbookComponent } from './addbook/addbook.component';
import { UpdateComponent } from './update/update.component';


const routes: Routes = [{path:"login",component:LoginComponent},
                        {path:'',component:HomeComponent},
                        {path:"signup",component:SignupComponent},
                       {path:"book",component:BooksComponent},
                      {path:"addbook",canActivate:[AuthGuard],component:AddbookComponent},
                       {path:"update",component:UpdateComponent}]
                      

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
