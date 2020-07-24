import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleRightsComponent } from './role-rights.component';
import { AddRolesComponent } from './add-roles/add-roles.component';
import { RolesDetailsComponent } from './roles-details/roles-details.component';

const routes: Routes = [
  {
    path: '',
    component: RoleRightsComponent,
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
    component: AddRolesComponent,
  },
  {
    path: 'edit/:id',
    component: RolesDetailsComponent,
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
//   providers: [CanActivateGuard, CanDeactivateGuard]
})
export class RoleRightsRoutingModule {
  static components = [ RoleRightsComponent, AddRolesComponent, RolesDetailsComponent];
// static components = [UserRightsComponent,AddUserComponent];

}

