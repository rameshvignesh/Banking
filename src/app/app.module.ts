import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpClientModule,HttpClient} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UserdetailComponent } from './userdetail/userdetail.component';
import { FormsModule } from '@angular/forms';
import { UserdetailEditComponent } from './userdetail-edit/userdetail-edit.component';
import { ApprovalComponent } from './approval/approval.component';
import { ApprovalconfirmationComponent } from './approvalconfirmation/approvalconfirmation.component';
import { RegisterComponent } from './register/register.component';
import { TrackingstatusComponent } from './trackingstatus/trackingstatus.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { HomeComponent } from './home/home.component';
import { ForgotuseridComponent } from './forgotuserid/forgotuserid.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { SetnewpasswordComponent } from './setnewpassword/setnewpassword.component';


@NgModule({
  declarations: [
    AppComponent,
    UserdetailComponent,
    UserdetailEditComponent,
    ApprovalComponent,
    ApprovalconfirmationComponent,
    RegisterComponent,
    TrackingstatusComponent,
    UserloginComponent,
    HomeComponent,
    ForgotuseridComponent,
    ForgotpasswordComponent,
    SetnewpasswordComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
