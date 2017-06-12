import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LoginComponent } from './login.component';
import { FormsModule } from "@angular/forms"
import { HttpModule } from '@angular/http'
import { RouterModule, Routes } from "@angular/router";
import { APP_BASE_HREF } from '@angular/common';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';



@NgModule({
    imports: [BrowserModule,
        FormsModule,
        HttpModule
    ],
  declarations: [ LoginComponent ],
  bootstrap: [LoginComponent ]
})
export class LoginModule { }
