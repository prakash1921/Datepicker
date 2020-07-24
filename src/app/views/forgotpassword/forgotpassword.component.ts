import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/GlobalServices';
import { Observable } from 'rxjs'
import { Http, Response } from '@angular/http';
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  forgotpasswordForm: FormGroup;
  submitted = false;
  data: any;
  userDetails:any=[];
  id:any;
  constructor(private fb: FormBuilder, public router: Router, private base_path_service: GlobalService, private http: Http) { }

  ngOnInit() {
    this.forgotpasswordForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmpassword: ['', Validators.required]

    });
  }

  get f() { return this.forgotpasswordForm.controls; }
  getuserdata(data) {
    console.log('lo data', data.target.value)
    var usernamedata =  data.target.value
    const url = this.base_path_service.base_path_api_url() +  'registration/getuserById/' + usernamedata;
    this.http.get(url).map((res: Response) => res.json()).subscribe(
      (success) => {
        console.log("successss",success);
        console.log("successss",success[0]._id);
        this.userDetails=success;
        this.id=success[0]._id;

        // localStorage.setItem('access_token',data[0])       
       },
      (error) => alert("error" + error)
    )
  }
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (!this.forgotpasswordForm.invalid) {
      this.data = {
        id:this.id,
        username:this.forgotpasswordForm.value.username,
        password:this.forgotpasswordForm.value.password,
        confirmpassword:this.forgotpasswordForm.value.confirmpassword
      };
      const url = this.base_path_service.base_path_api_url() + 'registration/update';
      this.http.post(url, this.data).map((res: Response) => res.json()).subscribe(
        (success) => {
          console.log("successss",success)
         this.saveData();
          // this.router.navigateByUrl('/login');
          // localStorage.setItem('access_token',data[0])       
         },
        (error) => alert("error" + error)
      )
    }
    
  }

  saveData(){
    const url = this.base_path_service.base_path_api_url() + 'otp/save';
    // var body = {
    //   userDetails :this.userDetails,
    //   newpassword: this.
    // }
      this.http.post(url, this.userDetails).map((res: Response) => res.json()).subscribe(
        (success) => {
          console.log("successss for now new data",success);
          this.router.navigateByUrl('/otp/'+ success.data._id);
          // this.router.navigateByUrl('/login');
          // localStorage.setItem('access_token',data[0])       
         },
        (error) => alert("error" + error)
      )

    
  }
}
