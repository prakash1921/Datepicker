import { NgModule } from '@angular/core';

import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser'
import { CommonModule } from "@angular/common";
import { NgxPaginationModule } from 'ngx-pagination';
import { RoleRightsRoutingModule } from './role-rights-routing.module';
@NgModule({
//   imports: [CustomerRoutingModule, SharedModule],
imports: [
    RoleRightsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    // BrowserModule,
    CommonModule,
    NgxPaginationModule
],
  declarations: [RoleRightsRoutingModule.components]
})
export class RoleRightsModule { }
