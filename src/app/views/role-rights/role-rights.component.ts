import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ToastrManager } from 'ng6-toastr-notifications';
import { GlobalService } from 'src/app/services/GlobalServices';
import { FormBuilder } from '@angular/forms';
import swal from 'sweetalert2';

@Component({
  selector: 'app-role-rights',
  templateUrl: './role-rights.component.html',
  styleUrls: ['./role-rights.component.css']
})
export class RoleRightsComponent implements OnInit {
  search: any = [];
  page: number = 1;
  numberOfRows: number = 10;
  rolesList: any;
  searchQuery: any;
  roleDetails: any;
  RoleID: any;
  isRoleAdd: boolean = false;
  isRoleEdit: boolean = false;
  isRoleDelete: boolean = false;

  constructor(private router: Router, public toastr: ToastrManager, private base_path_service: GlobalService,
    private fb: FormBuilder
  ) {
    this.search = fb.group({
      search: ['']
    })
    this.RoleID = localStorage.getItem('RoleID');
  }


  ngOnInit() {
    this.search.valueChanges.
      debounceTime(1000)
      .subscribe(res => {
        if (res.search.length != "") {
          this.serachMethod();
        } else {
          this.getAllRoles('all');
        }
      })
    this.getAllRoles('all');
    this.getRoleDetails();
    // this.userService.getUsers()
    //   .subscribe( data => {
    //     this.users = data;
    //   });

  }

  getRoleDetails() {
    const url = this.base_path_service.base_path_api_url() + 'roles/getRoleByRoleID/' + this.RoleID;
    this.base_path_service.GetRequest(url).subscribe(res => {
      if (res[0].json.length != 0) {
        this.roleDetails = res[0].json;
        if (this.roleDetails.hospitalRights.length != 0) {
          this.isRoleAdd = !this.roleDetails.hospitalRights[0].userRolesRights.roleRights.roleAdd;
          this.isRoleEdit = !this.roleDetails.hospitalRights[0].userRolesRights.roleRights.roleEdit;
          this.isRoleDelete = !this.roleDetails.hospitalRights[0].userRolesRights.roleRights.roleDelete;

        }
      }
    })
  }

  getAllRoles(type) {
    // const url = this.base_path_service.base_path_api_url() + 'roles/getAllRoles?locationid=' + localStorage.getItem('selectedlocation');
    const url = this.base_path_service.base_path_api_url() + 'roles/getAllRoles';

    this.base_path_service.GetRequest(url).subscribe(res => {
      if (res && (type == 'deleteFire')) {
        this.rolesList = res[0].json;
        this.toastr.successToastr('Role deleted Successfully', 'Success!');
      }
      else {
        this.rolesList = res[0].json;
      }
    },
      err => {
        console.log(err);
      })
  }
  serachMethod() {
    this.searchQuery = this.search.controls['search'].value.trim();
    console.log("this",this.searchQuery)
    // const url = this.base_path_service.base_path_api_url() + 'roles/searchRoles?locationid=' + localStorage.getItem('selectedlocation');
    const url = this.base_path_service.base_path_api_url() + 'roles/searchRoles';
   
    this.base_path_service.PostRequest(url, { name: this.searchQuery }).subscribe(res => {
      if (res[0].json.length != 0) {
        this.rolesList = res[0].json;
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
        const url = this.base_path_service.base_path_api_url() + 'roles/remove';
        this.base_path_service.PostRequest(url, { id: item._id }).subscribe(res => {
          if (res[0].json.n == 1) {
            this.search.controls['search'].setValue('');
            this.getAllRoles('deleteFire')
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
    this.router.navigate(['role/edit/' + id]);
  };

  goto(): void {
    console.log("wwwwwwwwwwww")
    this.router.navigate(['/role/add']);
  };

}
