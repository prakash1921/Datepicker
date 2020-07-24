import { Component, OnInit } from '@angular/core';
// import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
// import {first} from "rxjs/operators";
import {Router} from "@angular/router";
import { GlobalService } from 'src/app/services/GlobalServices';
import { ToastrManager } from 'ng6-toastr-notifications';
import * as _ from "lodash";
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
locationid:any;
addForm: FormGroup;
passPatternError:boolean = false;
confirmPasswordError:boolean = false;
rolesList:any;
isRole:boolean = false;
isHospital:boolean = false;
isLocation:boolean = false;
LocationList :any;
  Role: any;
  Location: any;


  constructor(public toastr: ToastrManager,private formBuilder: FormBuilder,private router: Router,private base_path_service: GlobalService) { 
    this.locationid = localStorage.getItem('selectedLocation');
    this.getAllRoles();
    this.getAllHospitalLocation();
  }
 
 
  // addForm;

  ngOnInit() {

    this.addForm = this.formBuilder.group({
      PrintUserName: [''],
      email: ['', Validators.required],
      Username: ['', Validators.required],
      password: ['', Validators.required],
      repassword : ['',Validators.required],
      Role : [],
      HospitalID : [ ],
      LocationID : []
    });
    this.addForm.setValue({
      PrintUserName:'',
      email:'',
      password:'',
      repassword:'',
      Role:'',
      Username:'',
      HospitalID :' ',
      LocationID : ' '
    })

    // this.addForm.setErrorMessage('username','pattern','Invalid Pattern Space and Special Character are not Allowed in UserName');

    // this.addForm.setErrorMessage('username','pattern','Invalid Pattern Space and Special Character are not Allowed in UserName');

  }

  getAllHospitalLocation(){
    const url  =this.base_path_service.base_path_api_url() + 'hospitallocation/getAllHospitallocations';
    this.base_path_service.GetRequest(url).subscribe(res =>
      {
        if(res[0].json.length !=0){
          this.LocationList =res[0].json;
        }
      },
      err =>{
        console.log(err);
      })
  }
  getAllRoles(){
    // const url  =this.base_path_service.base_path_api_url() + 'roles/getAllRoles?locationid=' + localStorage.getItem('selectedLocation');
    const url  =this.base_path_service.base_path_api_url() + 'roles/getAllRoles';
    this.base_path_service.GetRequest(url).subscribe(res =>
      {
        if(res[0].json.length !=0){
          this.rolesList =res[0].json;
        }
      },
      err =>{
        console.log(err);
      })
  }

  save(){
    // if(this.addForm.isValid()){
    if(this.addForm.invalid){
      if(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(this.addForm.value.password)){
        if(this.addForm.value.password == this.addForm.value.repassword){
          if(this.addForm.value.Role!=""){
            if(this.addForm.value.HospitalID!=""){
              if(this.addForm.value.LocationID!=""){
            // this.saveUserData(this.addForm.value);
              }else{
                this.isLocation = true;
                setTimeout(() =>{
                  this.isLocation = false;
                },2000);
                return
              }
            }else{
              this.isHospital = true;
                setTimeout(() =>{
                  this.isHospital = false;
                },2000);
                return
            }
          }else{
            this.isRole = true;
                setTimeout(() =>{
                  this.isRole = false;
                },2000);
                return
          }
        }else{
          this.confirmPasswordError = true;
              setTimeout(() =>{
                this.confirmPasswordError = false;
              },2000);
              return
        }
      }else{
        this.passPatternError = true;
            setTimeout(() =>{
              this.passPatternError = false;
            },2000);
            return
      }

    }else{
      return
    }
  }

  // saveUserData(data) {
    
  //     const url  =this.base_path_service.base_path_api_url() + 'userRights/saveUser';
  //   this.base_path_service.PostRequest(url,data).subscribe(res =>
  //     {
  //       if(res[0].json.length !=0){
  //        this.toastr.errorToastr(res[0].json.msg,'Opps!');

  //       }else{
  //         this.router.navigate(['role']);
  //        this.toastr.errorToastr(res[0].json.msg,'Success!')

  //       }
  //     },
  //     err =>{
  //       console.log(err);
  //     })
  // }
  getrole(data){
    // console.log("uuuu",data.target.value)
    // this.Role=data.target.value
    this.Role= _.find(this.rolesList,function (o) { return o.RoleID == data.target.value;});
   console.log("this.Role,",this.Role.RoleID) 
  }
  getlocation(data){
    console.log("uuuu",data.target.value)
    this.Location=data.target.value;
  //   this.Location= _.find(this.LocationList,function (o) { return o.LocationName == data.target.value;});
  //  console.log("this.Location,",this.Location) 
  }
  saveUserData() {
var body={
  data:this.addForm.value,
  Role:this.Role.RoleID,
  LocationID:this.Location

}
   
    console.log("jjj",body)
    console.log("form value",this.addForm.value)
      const url  =this.base_path_service.base_path_api_url() + 'userRights/saveUser';
    this.base_path_service.PostRequest(url,body).subscribe(res =>
      {
        if(res[0].json.length !=0){
         this.toastr.errorToastr(res[0].json.msg,'Opps!');

        }else{
          this.router.navigate(['userright']);
         this.toastr.successToastr(res[0].json.msg,'Success!')

        }
      },
      err =>{
        console.log(err);
      })
  }
}
