import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ToastrManager } from 'ng6-toastr-notifications';
import { GlobalService } from 'src/app/services/GlobalServices';
import { FormBuilder } from '@angular/forms';
import swal from 'sweetalert2';
@Component({
  selector: 'app-user-rights',
  templateUrl: './user-rights.component.html',
  styleUrls: ['./user-rights.component.css']
})
export class UserRightsComponent implements OnInit {
  search: any = [];
  page: number = 1;
  numberOfRows: number = 10;
  userList: any;
  searchQuery: any;
  roleDetails: any;
  RoleID: any;
  isUserAdd: boolean = false;
  isUserEdit: boolean = false;
  isUserDelete: boolean = false;

  constructor(private router: Router, public toastr: ToastrManager, private base_path_service: GlobalService,
    private fb: FormBuilder
  ) {
    this.search = fb.group({
      search: ['']
    })
    this.RoleID = localStorage.getItem('RoleID');
  }


  ngOnInit() {
    this.search.valueChanges.debounceTime(1000)
      .subscribe(res => {
        if (res.search.length != "") {
          this.serachMethod();
        } else {
          this.getAllUsers('all');
        }
      })
    this.getAllUsers('all');
    this.getRoleDetails();
    // this.userService.getUsers()
    //   .subscribe( data => {
    //     this.users = data;
    //   });

  }

  getRoleDetails() {
    // const url = this.base_path_service.base_path_api_url() + 'roles/getRoleByRoleID/' + this.RoleID;
    const url = this.base_path_service.base_path_api_url() + 'roles/getRoleByRoleID/' + 2;

    this.base_path_service.GetRequest(url).subscribe(res => {
      if (res[0].json.length != 0) {
        this.roleDetails = res[0].json;
        console.log("tttt", this.roleDetails)
        if (this.roleDetails.hospitalRights.length != 0) {
          this.isUserAdd = !this.roleDetails.hospitalRights[0].userRolesRights.userRights.userAdd;
          this.isUserEdit = !this.roleDetails.hospitalRights[0].userRolesRights.userRights.userEdit;
          this.isUserDelete = !this.roleDetails.hospitalRights[0].userRolesRights.userRights.userDelete;

        }
      //   if(this.roleDetails.reportRights.length!=0){
      //     this.isUserAdd=!this.roleDetails.reportRights[0].ReportRolesRights.HospitalDayBook.HospitalDayBookView;
      //     this.isUserEdit=!this.roleDetails.reportRights[0].ReportRolesRights.HospitalDayBook.HospitalDayBookOPDView;
      //     this.isUserDelete=!this.roleDetails.reportRights[0].ReportRolesRights.HospitalDayBook.HospitalDayBookIPDView;
          

        
      // }
    }
    })
  }
  getAllUsers(type) {
    const url = this.base_path_service.base_path_api_url() + 'userRights/getAllUserRights';
    this.base_path_service.GetRequest(url).subscribe(res => {
      if (res && (type == 'deleteFire')) {
        this.userList = res[0].json;

        this.toastr.successToastr('User delete Successfully', 'Success!');
      }
      else {
        this.userList = res[0].json;
        console.log("trrr", this.userList)
      }
    },
      err => {
        console.log(err);
      })
  }
  serachMethod() {
    this.searchQuery = this.search.controls['search'].value.trim();
    const url = this.base_path_service.base_path_api_url() + 'userRights/searchUserUserRights';
    this.base_path_service.PostRequest(url, { name: this.searchQuery }).subscribe(res => {
      if (res[0].json.length != 0) {
        this.userList = res[0].json;
      }
    },
      err => {
        console.log(err);
      })
  }



  delete(item) {
    console.log("delete page", item);
    swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        // swal.fire(
        //   'Deleted!',
        //   'Your file has been deleted.',
        //   'success'
        // )
        const url = this.base_path_service.base_path_api_url() + 'hospitallocation/getAllHospitallocations';
        this.base_path_service.PostRequest(url, { id: item._id }).subscribe(res => {
          if (res[0].json.n == 1) {
            this.search.controls['search'].setValue('');
            this.getAllUsers('deleteFire')
          }
        },
          err => {
            console.log(err);
          });
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === swal.DismissReason.cancel) {
        // swal.fire(
        //   'Cancelled',
        //   'Your imaginary file is safe :)',
        //   'error'
        // )
      }
    })
  }

  edit(item: any): void {
    var id = item._id;
    // localStorage.removeItem("editUserId");
    // localStorage.setItem("editUserId", user.id.toString());
    this.router.navigate(['userright/edit/' + id]);
  };

  goto(): void {
    console.log("wwwwwwwwwwww")
    this.router.navigate(['/userright/add']);
  };
}
