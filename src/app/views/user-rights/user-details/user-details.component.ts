import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrManager } from 'ng6-toastr-notifications';
import { GlobalService } from 'src/app/services/GlobalServices';
import * as _ from "lodash";
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  locationid: any;
  addForm: FormGroup;
  passPatternError: boolean = false;
  confirmPasswordError: boolean = false;
  rolesList: any;
  isRole: boolean = false;
  isHospital: boolean = false;
  isLocation: boolean = false;
  locationList: any;
  userDetails: any;
  id: any;
  roletest: any;
  locationtest: any;
  locationtestname:any;
  Location: any;
  Role: any;

  constructor(public toastr: ToastrManager, public activatedRouter: ActivatedRoute, private formBuilder: FormBuilder, private router: Router, private base_path_service: GlobalService) {
    this.locationid = localStorage.getItem('selectedLocation');
    this.getAllRoles();
    this.getAllHospitalLocation();
  }


  // addForm;

  ngOnInit() {
    this.locationtestname='';
    this.roletest='';
    this.addForm = this.formBuilder.group({
      PrintUserName: [''],
      email: [''],
      Username: [''],
      // password: ['', Validators.required],
      // repassword : ['',Validators.required],
      // Role: [''],
      HospitalID: [' '],
      // LocationID: [' ']
    });
    this.addForm.setValue({
      PrintUserName: '',
      email: '',
      // Role:'',
      Username: '',
      HospitalID: ' ',
      // LocationID: ' '
    })
    this.activatedRouter.params.subscribe(params => {
      this.id = params['id'];
      this.getUserdetails();
    })
    this.getAllHospitalLocation() ;



  }

  getUserdetails() {
    const url = this.base_path_service.base_path_api_url() + 'userRights/details/' + this.id;
    this.base_path_service.GetRequest(url).subscribe(res => {
      if (res[0].json.length != 0) {
        console.log("ttrttredit", res[0].json[0])
        this.userDetails = res[0].json[0];
        this.roletest = this.userDetails.Role[0].RoleName;
        if (this.userDetails.length != 0) {
          this.locationtest = _.find(this.locationList, function (o) { return o.LocationID ==  res[0].json[0].LocationID; });
console.log("lll1st",this.locationtest)
          this.locationtestname=this.locationtest.LocationName;
          console.log("llllllllllll",this.locationtestname)
        }
        this.addForm.setValue({
          'PrintUserName': this.userDetails.PrintUserName,
          'email': this.userDetails.Email,
          'Username': this.userDetails.Username,
          // 'Role':this.userDetails.Role[0].RoleName,

          'HospitalID': this.userDetails.HospitalID,
          // 'LocationID':this.userDetails.LocationID
        })
      }
    },
      err => {
        console.log(err);
      })
  }

  getAllHospitalLocation() {
    const url = this.base_path_service.base_path_api_url() + 'hospitallocation/getAllHospitallocations';
    this.base_path_service.GetRequest(url).subscribe(res => {
      if (res[0].json.length != 0) {
        this.locationList = res[0].json;
      }
    },
      err => {
        console.log(err);
      })
  }
  getAllRoles() {
    const url = this.base_path_service.base_path_api_url() + 'roles/getAllRoles?locationid=' + localStorage.getItem('selectedLocation');
    this.base_path_service.GetRequest(url).subscribe(res => {
      if (res[0].json.length != 0) {
        this.rolesList = res[0].json;
      }
    },
      err => {
        console.log(err);
      })
  }

  save() {
    // if(this.addForm.isValid()){
    if (this.addForm.invalid) {
      if (this.addForm.value.Role != "") {
        if (this.addForm.value.HospitalID != "") {
          if (this.addForm.value.LocationID != "") {
            // this.updateUserData(this.addForm.value);
          } else {
            this.isLocation = true;
            setTimeout(() => {
              this.isLocation = false;
            }, 200);
            return
          }
        } else {
          this.isHospital = true;
          setTimeout(() => {
            this.isHospital = false;
          }, 200);
          return
        }
      } else {
        this.isRole = true;
        setTimeout(() => {
          this.isRole = false;
        }, 200);
        return
      }
    } else {
      return
    }
  }


  getrole(data){
    console.log("uuuu",data.target.value)
    // this.Role=data.target.value
    this.Role= _.find(this.rolesList,function (o) { return o.RoleName == data.target.value;});
   console.log("this.Role,",this.Role) 
  }
  getlocation(data){
    console.log("uuuu",data.target.value)
    // this.Location=data.target.value;
    this.Location= _.find(this.locationList,function (o) { return o.LocationName == data.target.value;});
   console.log("this.Location,",this.Location) 
  }
  updateUserData() {
    // var data = this.addForm.value
    var  body={
      data :this.addForm.value,
      RoleID:this.Role.RoleID,
      LocationID:this.Location.LocationID
    }
    
    // const url = this.base_path_service.base_path_api_url() + 'userRights/updateUser?locationid=' + localStorage.getItem('selectedLocation');
    const url = this.base_path_service.base_path_api_url() + 'userRights/updateUser';
    this.base_path_service.PostRequest(url, body).subscribe(res => {
      if (res[0].json.length == 0) {
        this.toastr.errorToastr(res[0].json.msg, 'Opps!');

      } else {
        this.router.navigate(['userright']);
        this.toastr.successToastr(res[0].json.msg, 'Success!')
        this.locationtestname='';
        this.roletest='';
      }
    },
      err => {
        console.log(err);
      })
  }
  // updateUserData(data) {
  //   const url = this.base_path_service.base_path_api_url() + 'userRight/updateUser?locationid=' + localStorage.getItem('selectedLocation');
  //   this.base_path_service.PostRequest(url, data).subscribe(res => {
  //     if (res[0].json.length != 0) {
  //       this.toastr.errorToastr(res[0].json.msg, 'Opps!');

  //     } else {
  //       this.router.navigate(['hospitals/UserRolesRight/UserMaster']);
  //       this.toastr.errorToastr(res[0].json.msg, 'Success!')

  //     }
  //   },
  //     err => {
  //       console.log(err);
  //     })
  // }


}
