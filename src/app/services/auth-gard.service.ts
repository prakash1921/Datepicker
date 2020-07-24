import { Injectable } from '@angular/core';
import { CanActivateChild, Router } from '@angular/router';
import { GlobalService } from './GlobalServices';

@Injectable()
export class CanActivateViaAuthGard implements CanActivateChild {

  constructor(private global_service:GlobalService,private router:Router) { }
  canActivateChild(){
const document = JSON.parse(localStorage.getItem('userinfo'));
if(localStorage.getItem('access-token')){
if(localStorage.getItem('access-token')){
  return true;
}else{
  this.router.navigateByUrl('/login');
}
  }

else{
  this.router.navigateByUrl('/login');
  }
}
}
