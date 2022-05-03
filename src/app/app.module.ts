import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { CustomerModule } from './customer/customer.module';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AuthenticateService } from './service/Authenticate.service';
import { TokenIntercepterService } from './service/token-intercepter.service';
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNoteFoundComponent } from './page-note-found/page-note-found.component';

import {CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@NgModule({
  declarations: [
    AppComponent,
    PageNoteFoundComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomerModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    ToastrModule.forRoot(  { timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true}),
  ],
  providers: [AuthenticateService,{
    provide: HTTP_INTERCEPTORS,
    useClass:TokenIntercepterService,
    multi:true,
  }],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
