import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {HttpClientModule} from  '@angular/common/http';
import { SeriveService } from './serive.service';
import { BooksComponent } from './books/books.component';

import { AddbookComponent } from './addbook/addbook.component';
import { LogoutComponent } from './logout/logout.component';
import { UpdateComponent } from './update/update.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    BooksComponent,
    AddbookComponent,
    LogoutComponent,
    UpdateComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
],
  providers: [SeriveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
