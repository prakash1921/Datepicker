import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { GlobalService } from 'src/app/services/GlobalServices';
import { Observable } from 'rxjs'
import { Http, Response } from '@angular/http';
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ToastrManager } from 'ng6-toastr-notifications'
import { BehavioursubService } from 'src/app/services/behavioursub.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm;
  // loginForm: FormGroup;
  submitted = false;
  data: any;
  message: any;
  messageinvalid:boolean = false;
  userdetailsotp:any = [];
  constructor( private behavioursubject: BehavioursubService,private toastr:ToastrManager,private fb: FormBuilder, private base_path_service: GlobalService, private http: Http,private ngxService: NgxUiLoaderService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]

    });

    localStorage.setItem('selectedLocation','1');
    // this.loginForm.setValue({
    //   'username': 'hhhhhhhhhhhhhhhh',
    //   'password': ''
    // })
    // this.ngxService.start();
    this.behavioursubject.otpvalue.subscribe(data => this.userdetailsotp = data );
  }
  get f() { return this.loginForm.controls; }


 

  login() {
    // this.ngxService.stop();
    this.data = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
    };
    // if (!this.validate(this.data)) {
    if (!this.loginForm.invalid) {
      const url = this.base_path_service.base_path_api_url() + 'registration/login';
      this.http.post(url, this.data).map((res: Response) => res.json()).subscribe(
        (success) => {
          console.log("successss",success)
          if(success.status == true){
            alert("logeed in "+success);
             localStorage.setItem('access_token',success.token);
             localStorage.setItem('refToken',success.refToken);

             localStorage.setItem('UserID',success.Admin[0].UserID);

             localStorage.setItem('UserName',success.Admin[0].Username);
             localStorage.setItem('RoleID',success.Admin[0].RoleID);
            this.toastr.successToastr('Successfully Logged in ','Success!');



          }else{
            // this.messageinvalid=true;
            // this.message = success.msg;
            this.toastr.errorToastr('Logged Failed ','Oops!');
          }
          
          // localStorage.setItem('access_token',data[0])       
         },
        (error) => alert("error" + error)
      )
    }
  }
  // login() {
  //   if (!this.loginForm.invalid) {
  //     console.log("lll", this.data)
  //     this.submitted = true;
  //     // var body = this.loginForm.value.username;
  //     var body = {
  //       username: this.loginForm.value.username,
  //       password: this.loginForm.value.password
  //     };
  //     console.log("body-------------------", body)
  //     console.log("hhhhhhhhhhhhhhhhh", this.loginForm.value.password);
  //     //  return 
  //     // } else {
  //   }
  // }
  // }else{
  //   this.submitted = false;
  //   this.f() 
  //     }

  // stop here if form is invalid
  // if (this.loginForm.invalid) {
  //   return;
  // }


  //    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.departmentcreation.value))
  // }


  validate(data) {
    if (!data.username) {
      this.message = 'username is Required';
      setTimeout(() => {
        this.message = '';
      }, 2000);
      return false;
    }
    if (!data.password) {
      this.message = 'password is Required';
      setTimeout(() => {
        this.message = '';
      }, 2000);
      return false;
    }
    return true;
  }





  //   onSubmit() {
  //     this.submitted = true;
  //     // const url='http://localhost:8000/department/saveDepartment';
  //     var url = this.base_path_service.base_path_api_url() + 'department/saveDepartment';
  //     console.log('hdbashfbsdhb',url);
  //     var body = this.department.value;
  //     this.http.post(url,body).subscribe(res => {
  //       console.log('res',res)
  //     },
  // err=>{
  //   console.log('looooo',err)
  // })

  //     // stop here if form is invalid
  //     if (this.department.invalid) {
  //         return;
  //     }

  // //    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.departmentcreation.value))
  // // }
  // }
  // }
}
