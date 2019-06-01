//building imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


//for routing
import { AppRoutingModule } from './app-routing.module';

//building component
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SignupComponent } from './user/signup/signup.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
