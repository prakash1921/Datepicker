import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { UserRightsComponent } from './user-rights.component';
import { UserDetailsComponent } from './user-details/user-details.component';

// import { CustomerComponent } from './customer.component';
// import { CustomerOrdersComponent } from './customer-orders/customer-orders.component';
// import { CustomerDetailsComponent } from './customer-details/customer-details.component';
// import { CustomerEditComponent } from './customer-edit/customer-edit.component';
// import { CanActivateGuard } from './guards/can-activate.guard';
// import { CanDeactivateGuard } from './guards/can-deactivate.guard';





const routes: Routes = [
  {
    path: '',
    component: UserRightsComponent,
    // children: [
    //   { path: 'userright/add', component: AddUserComponent },
    //   { path: 'details', component: UserDetailsComponent },
    // //   {
    // //     path: 'edit',
    // //     component: CustomerEditComponent,
    // //     canActivate: [CanActivateGuard],
    // //     canDeactivate: [CanDeactivateGuard]
    // //   }
    // ]
  },
  {
    path: 'add',
    component: AddUserComponent,
  },
  {
    path: 'edit/:id',
    component: UserDetailsComponent,
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
//   providers: [CanActivateGuard, CanDeactivateGuard]
})
export class UserRightsRoutingModule {
  static components = [UserRightsComponent, AddUserComponent, UserDetailsComponent];
// static components = [UserRightsComponent,AddUserComponent];

}

