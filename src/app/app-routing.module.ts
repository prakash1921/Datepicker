import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { RegistrationComponent } from './views/registration/registration.component';
import { OtpComponent } from './views/otp/otp.component';
import { ForgotpasswordComponent } from './views/forgotpassword/forgotpassword.component';
import { ExampleComponent } from './views/example/example.component';
import { PagenationComponent } from './views/pagenation/pagenation.component';
import { TypeaheadComponent } from './views/typeahead/typeahead.component';
import { UserRightsComponent } from './views/user-rights/user-rights.component';
import { AddUserComponent } from './views/user-rights/add-user/add-user.component';
import { UserDetailsComponent } from './views/user-rights/user-details/user-details.component';
import { CanActivateViaAuthGard } from './services/auth-gard.service';
import { SidebarComponent } from './views/sidebar/sidebar.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ElectionchartComponent } from './views/electionchart/electionchart.component';
// import { UserRightsModule } from './views/user-rights/user-rights.module';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivateChild:[CanActivateViaAuthGard],
    data: {
      title: 'login'
    }
  },
  {
    path: 'register',
    component: RegistrationComponent,
    data: {
      title: 'registartion'
    }
  },
  {
    path: 'otp/:id',
    component: OtpComponent,
    data: {
      title: 'otp'
    }
  },
  
  {
    path: 'forgotpassword',
    component: ForgotpasswordComponent,
    data: {
      title: 'otforgotpasswordp'
    }
  },
  {
    path: 'example',
    component: ExampleComponent,
    data: {
      title: 'example'
    }
  },
  {
    path: 'list',
    component: PagenationComponent,
    data: {
      title: 'list'
    }
    
  },
  {
    path: 'typehead',
    component: TypeaheadComponent,
    data: {
      title: 'typehead'
    }
    
  },
  {
    path: 'sidebar',
    component: SidebarComponent,
    data: {
      title: 'sidebar'
    }
    
  },
  {
    path:'chart',
    component:ElectionchartComponent,
    data:{
title:'Election Chart'
    }
  },
  // { path: 'userright', loadChildren: 'app/views/user-rights/user-rights.module#UserRightsModule' },
  // { path: 'userright', loadChildren: 'app/views/user-rights/user-rights.module#UserRightsModule' },
  { path: 'userright', loadChildren: () => import('./views/user-rights/user-rights.module').then(m => m.UserRightsModule) },
  
  {
    path: 'userright/add',
    // component: AddUserComponent,
    loadChildren: () => import('./views/user-rights/user-rights.module').then(m => m.UserRightsModule),
    data: {
      title: 'add'
    },
    

    
  },
  {
    path: 'userright/edit/:id',
    // component: AddUserComponent,
    loadChildren: () => import('./views/user-rights/user-rights.module').then(m => m.UserRightsModule),
    data: {
      title: 'edit'
    },   
  },


  { path: 'role', loadChildren: () => import('./views/role-rights/role-rights.module').then(m => m.RoleRightsModule) },
  
  {
    path: 'role/add',
    // component: AddUserComponent,
    loadChildren: () => import('./views/role-rights/role-rights.module').then(m => m.RoleRightsModule),
    data: {
      title: 'add'
    },
    

    
  },
  {
    path: 'role/edit/:id',
    // component: AddUserComponent,
    loadChildren: () => import('./views/role-rights/role-rights.module').then(m => m.RoleRightsModule),
    data: {
      title: 'edit'
    },   
  },
 
  // {
  //   path: ' ',
  //   component: UserRightsComponent,
  //   data: {
  //     title: 'userright'
  //   },
  //   children: [
  //     {
  //       path:'add',
  //       component:AddUserComponent,
  //       data:{
  //           title:'tttttt '
  //       }
  //   },
  //   {
  //       path:'eddit',
  //       component:UserDetailsComponent,
  //       data:{
  //           title:'tt'
  //       }
  //   }
  //   ]
    
  // },

  {
    path:'dashboard',
    component:DashboardComponent,
    data:{
      title:'dashboard'
    }
  },

  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
