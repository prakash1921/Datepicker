import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { RegistrationComponent } from './views/registration/registration.component';
import { OtpComponent } from './views/otp/otp.component';
import { ForgotpasswordComponent } from './views/forgotpassword/forgotpassword.component';
import { ExampleComponent } from './views/example/example.component';
// import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { GlobalService } from './services/GlobalServices';
import { NgOtpInputModule } from  'ng-otp-input';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
// import { UserRightsComponent } from './views/user-rights/user-rights.component';
import { AddUserComponent } from './views/user-rights/add-user/add-user.component';
import { UserDetailsComponent } from './views/user-rights/user-details/user-details.component';
import { ExcelService } from './services/excel.service';
import {  DatepickerModule, BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { ButtonsModule } from 'ngx-bootstrap/buttons'
import { BsDropdownModule } from 'ngx-bootstrap/dropdown'
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { PagenationComponent } from './views/pagenation/pagenation.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule } from 'ng6-toastr-notifications';
import { TypeaheadComponent } from './views/typeahead/typeahead.component';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown-angular7';
// import { UserRightsComponent } from './views/user-rights/user-rights.component';
import { CanActivateViaAuthGard } from './services/auth-gard.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './views/sidebar/sidebar.component';
import { RoleRightsComponent } from './views/role-rights/role-rights.component';
import { AddRolesComponent } from './views/role-rights/add-roles/add-roles.component';
import { RolesDetailsComponent } from './views/role-rights/roles-details/roles-details.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ElectionchartComponent } from './views/electionchart/electionchart.component'
// import { UserRightsModule } from './views/user-rights/user-rights.module';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    OtpComponent,
    ForgotpasswordComponent,
    ExampleComponent,
    // UserRightsComponent,
    // AddUserComponent,
    // UserDetailsComponent,
    PagenationComponent,
    TypeaheadComponent,
    SidebarComponent,
    DashboardComponent,
    ElectionchartComponent,
    // RoleRightsComponent,
    // AddRolesComponent,
    // RolesDetailsComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    NgOtpInputModule,
    BsDatepickerModule.forRoot(),
    NgxUiLoaderModule,
    NgxPaginationModule,
    ButtonsModule.forRoot(),
    BsDropdownModule,
    NgbTypeaheadModule,
    // BsDatepickerModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot() ,
    NgMultiSelectDropDownModule.forRoot(),
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    // UserRightsModule
    // HttpClientModule

  ],
  providers: [
    GlobalService,
    ExcelService,
    DatePipe,
    CanActivateViaAuthGard

  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
