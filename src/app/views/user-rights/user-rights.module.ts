import { NgModule } from '@angular/core';

// import { SharedModule } from '../shared/shared.module';
// import { CustomerRoutingModule } from './customer-routing.module';
import { UserRightsRoutingModule } from './user-rights-routing.module';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser'
import { CommonModule } from "@angular/common";
import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
//   imports: [CustomerRoutingModule, SharedModule],
imports: [UserRightsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    // BrowserModule,
    CommonModule,
    NgxPaginationModule
],
  declarations: [UserRightsRoutingModule.components]
})
export class UserRightsModule { }
