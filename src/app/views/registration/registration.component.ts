import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalService } from 'src/app/services/GlobalServices';
import { Observable } from 'rxjs'
import { Http, Response } from '@angular/http';
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registerForm;
  // registerForm: FormGroup;
    loading = false;
    submitted = false;
    data: any;
  constructor(public router: Router, private formBuilder: FormBuilder, private base_path_service: GlobalService, private http: Http) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      email:['',[Validators.required,Validators.email]],
      mobilenumber:['', Validators.required, Validators.minLength(10),, Validators.maxLength(10)],
  });
  }

  get f() { return this.registerForm.controls; }
  onSubmit() {
    this.submitted = true;
    // var body = this.registerForm.value;
    if (!this.registerForm.invalid) {
    this.data = {
      firstName: this.registerForm.value.firstName,
      lastName: this.registerForm.value.lastName,
      username:this.registerForm.value.username,
      password:this.registerForm.value.password,
      email:this.registerForm.value.email,
      mobilenumber:this.registerForm.value.mobilenumber,
    };
    const url = this.base_path_service.base_path_api_url() + 'registration/save';
    this.http.post(url, this.data).map((res: Response) => res.json()).subscribe(
      (success) => {
        console.log("successss",success)
        this.router.navigateByUrl('/login');

        // localStorage.setItem('access_token',data[0])       
       },
      (error) => alert("error" + error)
    )

  }else{
    return;
  }
  }
}
