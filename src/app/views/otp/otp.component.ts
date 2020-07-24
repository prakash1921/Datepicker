import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
// import { ToastrManager } from 'ng6-toastr-notifications';
import { GlobalService } from 'src/app/services/GlobalServices';
import { Observable } from 'rxjs'
import { Http, Response } from '@angular/http';
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import { BehavioursubService } from 'src/app/services/behavioursub.service';
@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {
  id: any;
  otp: any;
  responseMessage: any;
  otpDetails: any;
  submitted = false;
  expired: any = false;
  updatedDetails: any;
  showmsg:any=false;
  exipredotp: boolean=false;
  // constructor(public router: Router, public activatedRouter: ActivatedRoute, private http: Http, public toastr: ToastrManager, private base_path_service: GlobalService) { }
  constructor( public behavioursubject : BehavioursubService,public router: Router, public activatedRouter: ActivatedRoute, private http: Http, private base_path_service: GlobalService) { }

  ngOnInit() {
    this.activatedRouter.params.subscribe(params => {
      this.id = params['id'];
      this.saveUserDetails();
      
      this.resendotp();
    });
  }

  onOtpChange(otp) {
    this.otp = otp;
    console.log("ootp", this.otp)
  }

  saveUserDetails() {
    const url = this.base_path_service.base_path_api_url() + 'otp/getotpDetails/' + this.id;
    this.http.get(url).map((res: Response) => res.json()).subscribe(
      (success) => {
        console.log("successss user data", success);
        this.otpDetails = success;
        console.log("otp", this.otpDetails[0].OTP);
        this.showmsg=true;

      },
      (error) => alert("error" + error)
    )
  }

  update() {
    console.log("yyyyyyyyyyyy",this.otpDetails[0].OTP);
    if (this.otpDetails[0].OTP == this.otp) {
      const url = this.base_path_service.base_path_api_url() + 'otp/updates';
      this.http.post(url, this.otpDetails).map((res: Response) => res.json()).subscribe(
        (success) => {
          console.log("successss", success);
          this.updatedDetails=success[0];  
          if (success.status == false) {
            // this.toastr.errorToastr(success.msg, 'Oops!');
          } else {
            // this.toastr.successToastr(success.msg, 'Success!');
            this.router.navigateByUrl('/login');

          }
          // this.otpDetails=success;       
        },
        (error) => alert("error" + error)
      )
    } else {
      console.log("otppp");
      this.exipredotp=true;
      this.expired = true;
      // this.toastr.errorToastr('OTP Does not Match', 'Oops!');
    }
  }
  resendotp() {
    setTimeout(() => {
      alert("otp expired  create new otp");
      this.expired = true;
    }, 30000);
  }
  resend() {
    console.log("resend otp",this.otpDetails[0]);
    const url = this.base_path_service.base_path_api_url() + 'otp/changeotp';
      this.http.post(url, this.otpDetails[0]).map((res: Response) => res.json()).subscribe(
        (success) => {
          console.log("resend data ng serve now new data",success);
          this.behavioursubject.sendData(success);
          // this.otp = success.data;
          // console.log("fffffffffotp",this.otp);
          this.saveUserDetails();
         
          // this.router.navigateByUrl('/otp/'+ success.data._id);
           this.expired = false;
           this.showmsg = true;
          // this.router.navigateByUrl('/login');
          // localStorage.setItem('access_token',data[0])       
         },
        (error) => alert("error" + error)
      )
  }
}
