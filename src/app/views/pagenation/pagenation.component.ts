import { Component, OnInit, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import swal from 'sweetalert2';
import { GlobalService } from 'src/app/services/GlobalServices';
import { Observable } from 'rxjs'
import { Http, Response } from '@angular/http';
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import { Router } from '@angular/router';
@Component({
  selector: 'app-pagenation',
  templateUrl: './pagenation.component.html',
  styleUrls: ['./pagenation.component.css']
})
export class PagenationComponent implements OnInit {

  data: any = [{
    eid: 'e101',
    ename: 'ravi',
    esal: 1000
  }, {
    eid: 'e102',
    ename: 'ram',
    esal: 2000
  }, {
    eid: 'e103',
    ename: 'rajesh',
    esal: 3000
  }, {
    eid: 'e101',
    ename: 'ravi',
    esal: 1000
  }, {
    eid: 'e102',
    ename: 'ram',
    esal: 2000
  }, {
    eid: 'e103',
    ename: 'rajesh',
    esal: 3000
  }, {
    eid: 'e101',
    ename: 'ravi',
    esal: 1000
  }, {
    eid: 'e102',
    ename: 'ram',
    esal: 2000
  }, {
    eid: 'e103',
    ename: 'rajesh',
    esal: 3000
  }, {
    eid: 'e101',
    ename: 'ravi',
    esal: 1000
  }, {
    eid: 'e102',
    ename: 'ram',
    esal: 2000
  }, {
    eid: 'e103',
    ename: 'rajesh',
    esal: 3000
  }, {
    eid: 'e101',
    ename: 'ravi',
    esal: 1000
  }, {
    eid: 'e102',
    ename: 'ram',
    esal: 2000
  }, {
    eid: 'e103',
    ename: 'rajesh',
    esal: 3000
  }, {
    eid: 'e101',
    ename: 'ravi',
    esal: 1000
  }, {
    eid: 'e102',
    ename: 'ram',
    esal: 2000
  }, {
    eid: 'e103',
    ename: 'rajesh',
    esal: 3000
  }, {
    eid: 'e101',
    ename: 'ravi',
    esal: 1000
  }, {
    eid: 'e102',
    ename: 'ram',
    esal: 2000
  }, {
    eid: 'e103',
    ename: 'rajesh',
    esal: 3000
  }];
  page: number = 1;
  numberOfRows: number = 10;
  search: FormGroup;
  IPDReceipt: string = "IPDBill";
  Showreceipt: boolean = true;
  BillList123: any = [];
  test: any[];
  deletedTestArray: any;
  Cash: boolean = true;
  CreditCard: boolean = false;
  Cashless: boolean = false;
  paymentType: string = "Cash";
  filepathData: any = [];
  currentdate: Date;
  dddischargedate: string;
  nextdate: string;
  maxDate: Date;
  locationid: any;
  nextMyDate:any;
  myfromDate:any;
  myToDate:any;
  minDate:Date;
  to:string;
  from:string;
  Userid: string;
  userDetails: any;
  locationList: any;
  // maxDate:Date;
  
  constructor( public router: Router,private el: ElementRef, private fb: FormBuilder, private http: Http, private base_path_service: GlobalService) { }

  ngOnInit() {
    this.maxDate = new Date();
    this.search = this.fb.group({
      search: ['']
    })
  }
  edit(item) {
    console.log("edit page", item);
  }

  // getDate(date) {
  //   if (date == null) {
  //     return '-'
  //   } else if (date.split(' ') == ' ') {
  //     var splitdate = date.split(' ');
  //     return splitdate[0];
  //   } else {
  //     var splitdate = date.split('T')
  //     return splitdate[0];
  //   }
  // }
  // selectipdreceipt(type) {
  //   if (type == "Provisional") {
  //     // this.tests = [];
  //     this.ngOnInit();
  //   } else if (type == "IPDFinalBill") {
  //     // this.tests = [];
  //     this.ngOnInit();
  //   } else {
  //     this.ngOnInit();
  //   }
  // }
  // Getvaluebyreg(e) {
  //   if (e == " ") {
  //     if (this.IPDReceipt == 'Provisonal') {
  //       this.ngOnInit();
  //       this.IPDReceipt = 'Provisional';
  //       this.Showreceipt = false;
  //     } else if (this.IPDReceipt == 'IPDFinalBill') {
  //       this.ngOnInit();
  //       this.IPDReceipt = 'IPDFinalBill';
  //       this.Showreceipt = false;
  //     } else {
  //       this.ngOnInit();
  //       this.IPDReceipt = 'IPDBill';
  //       this.Showreceipt = true;
  //     }
  //     var data = {
  //       reqNumber: e
  //     }

  //     this.BillList123 = ["gets all bill no related to patient reg no and opdipd no"];

  //   }
  // }
  // getbilldate(billno) {

  //   this.getpatientfortest(billno);
  // }
  // getpatientfortest(billno) {
  //   const data = {
  //     BillNo: billno
  //   }
  //   const url = this.base_path_service.base_path_api_url() + 'bill/togettest';
  //   this.http.post(url, data).map((res: Response) => res.json()).subscribe(
  //     (success) => {
  //       this.test = []
  //     },
  //     (error) => alert("error" + error)
  //   )
  // }

  // remove(id, value) {
  //   for (var i = 0; i < this.test.length; i++) {
  //     if (this.test[i].ServiceID == id) {
  //       if (this.test[i]._id != undefined) {
  //         this.deletedTestArray.push(this.test[i])
  //       }
  //       this.test.splice(i, 1);
  //     }
  //   }
  // }

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
        swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === swal.DismissReason.cancel
      ) {
        swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }
  goto() {
    console.log("goto add employee page")
  }


  // selectpaymenttype(value) {
  //   switch (value) {
  //     case 'Cash': {
  //       this.Cash = true;
  //       this.CreditCard = false;
  //       this.Cashless = false;
  //       break;
  //     }
  //     case 'Credit Card': {
  //       this.Cash = false;
  //       this.CreditCard = true;
  //       this.Cashless = false;
  //       break;
  //     }
  //     case 'Cashless': {
  //       this.Cash = false;
  //       this.CreditCard = false;
  //       this.Cashless = true;
  //       break;
  //     }
  //     default: {
  //       this.Cash = false;
  //       this.CreditCard = false;
  //       this.Cashless = false;
  //     }
  //   }
  // }


  // Ipdreprintip() {
  //   var BillNo = this.form.getDat().OPDIPDNo;
  //   // this..isUpdate = false;
  //   // this.router.navigateByUrl('report/misreport/pdf-ipd-bill/' + this.BillNo)
  // }

  // Provisionalreprintip() {
  //   var BillNo = this.form.getDat().OPDIPDNo;
  //   // this..isUpdate = false;
  //   // this.router.navigateByUrl('report/misreport/pdf-ipd-bill/' + this.BillNo)
  // }

  // Finalreprintip() {
  //   var BillNo = this.form.getDat().OPDIPDNo;
  //   // this..isUpdate = false;
  //   // this.router.navigateByUrl('report/misreport/pdf-ipd-bill/' + this.BillNo)
  // }



  // upload() {
  //   if (this.filepathData.length == 0) {
  //     let inputE1: HTMLInputElement = this.el.nativeElement.querySelector('#photo');
  //     let fileCount: number = inputE1.files.length;
  //     let formData = new FormData();
  //     var url = this.base_path_service.base_path + 'fileuploads/save'
  //     if (fileCount > 0) {
  //       formData.append('photo', inputE1.files.item(0));
  //       formData.append('LocationID', this.locationid);
  //       formData.append('ParientRegNo', this.form.getData().ParientRegNo);
  //       formData.append('OPDIPDNO', inputE1.reprintIPD);
  //       formData.append('PatientIPDDisachargeID', this.dischargeid);
  //       this.http.post(url, formData).map((res: Response) => res.json()).subscribe(
  //         (success) => {
  //           this.filepathData.push(success.data);
  //         },
  //         (error) => alert("errorrr" + error))
  //     }
  //   }
  //   else {
  //     console.log("---", this.filepathData);
  //     let inputE1: HTMLInputElement = this.el.nativeElement.querySelector('#photo');
  //     let fileCount: number = inputE1.files.length;
  //     let formData = new FormData();
  //     var url = this.base_path_service.base_path + 'fileuploads/update'
  //     if (fileCount > 0) {
  //       formData.append('photo', inputE1.files.item(0));
  //       formData.append('PatientIPDDisachargeID', this.filepathData[0].PatientIPDDisachargeID);
  //       formData.append('_id', this.filepathData[0]._id);
  //       console.log("formDattaformData", formData)
  //       this.http.post(url, formData).map((res: Response) => res.json()).subscribe(
  //         (success) => {
  //           this.filepathData[0].FileNamearray.push(success.data);
  //         },
  //         (error) => alert("errorrr" + error))
  //     }
  //     else {
  //       console.log("fffff", fileCount)
  //     }
  //   }
  // }

  // searchurl(item) {
  //   console.log("urll", item.name)
  //   window.open(item.url, ' ');
  //   // if(url){
  //   //   window.open(item.url,'_blank');
  //   //   window.open(item.url,'_blank','height=700,width=700');
  //   // }
  // }


  // deletePatientslatest(item, data) {
  //   console.log("new file", data);
  //   var body = {
  //     item: item,
  //     data: data
  //   }
  //   const url = this.base_path_service.base_path_api_url() + 'fileuploads/deletefilefromarray';
  //   this.base_path_service.PostRequest(url, body).subscribe(res => {
  //     if (res[0].json) {
  //       console.log("new items file", item);
  //       console.log("file before ress deleting", res[0].json);
  //       for (var i = 0; i < this.filepathData[0].FileNamearray.length; i++) {
  //         if (this.filepathData[0].FileNamearray[i]._id == item._id) {
  //           this.filepathData[0].FileNamearray.splice(i, 1);
  //         }
  //       }
  //       console.log("this filedataname file", this.filepathData)
  //     }
  //   },
  //     err => {
  //       console.log(err);

  //     })
  // }


  // //Date

  // getcurrentdate() {
  //   this.currentdate = new Date();
  //   this.dddischargedate = this.datePipe.transform(this.currentdate, 'yyyy-MM-dd');
  //   var someDate = new Date(this.dddischargedate);
  //   var numberofDaysToAdd = 1;
  //   someDate.setDate(someDate.getDate() + 1);
  //   this.nextdate = this.datePipe.transform(someDate, 'yyyy-MM-dd');
  //   this.form.setValue({
  //     'CreationDate': this.dddischargedate
  //   })

  // }
  // onValueChangeRegDate(value: Date): void {
  //   this.dddischargedate = this.datePipe.transform(value, 'yyyy-MM-dd');
  //   var someDate = new Date(this.dddischargedate);
  //   someDate.setDate(someDate.getDate() + 1);
  //   this.nextdate = this.datePipe.transform(someDate, 'yyyy-MM-dd');
  // }
  // viewAllcollection() {
  //   const url = this.base_path_service.base_path_api_url() + 'daybook/getPatientsAll/' + this.dddischargedate + '/' + this.nextdate + '/' + this.locationid;
  //   this.base_path_service.GetRequest(url).subscribe(res => {
  //     var allPatientBill = res[0].json
  //   })
  // }

  // viewAllOPDIPDcollection(billtype) {
  //   this.billtype = billtype
  //   const url = this.base_path_service.base_path_api_url() + 'daybook/getPatientsAll/' + this.dddischargedate + '/' + this.nextdate + '/' + this.locationid + '/' + billtype;
  //   this.base_path_service.GetRequest(url).subscribe(res => {
  //     var allPatientBill = res[0].json
  //   })
  // }






  // getCurrentDate() {
  //   this.currentdate = new Date();
  //   const date = this.datePipe.transform(this.currentdate, 'yyyy-MM-dd');
  //   this.nextMyDate = this.datePipe.transform(this.currentdate.setDate(this.currentdate.getDate() + 1), 'yyyy-MM-dd');
  //   this.form.setValue({
  //     'FromDate': date,
  //     'TO': date
  //   })
  // }
  // dateOnChange(value: Date): void {
  //   this.date = value;
  //   this.nextMyDate = this.datePipe.transform(value.getDate() + 1, 'yyyy-MM-dd');
  //   this.myToDate = this.date.getFullYear() + '-' + (this.date.getMonth() + 1) + '-' + this.date.getDate()
  // }
  // min(value:Date):void{
  //   this.date = value;
  //   this.myfromDate = this.date.getFullYear() + '-' + (this.date.getMonth() + 1) + '-' + this.date.getDate();
  //   this.minDate=value;
  //   this.minDate = this.minDate;
  //   this.minDate.setDate(this.minDate.getDate());
  // }
  // view() {
  //   if (this.form.getData().EndResult == null Or this.form.getData().EndResult == undefined or this.form.getData().EndResult != 'Select') {
  //     const data = this.form.getData();
  //     this.form = this.myfromDate ? this.myfromDate : Date.FromDate;
  //     this.to = this.nextMyDate;
  //     // function for endresult
  //   }else {

  //     const data = this.from.getData();
  //     this.form = this.myfromDate ? this.myfromDate : Date.FromDate;
  //     this.to = this.nextMyDate;
  //     const body = {
  //       FromDate: this.form,
  //       ToDate: this.to,
  //       Location: this.locationid,
  //       EndResult: this.form.getData().EndResult
  //     }
  //     const url = this.base_path_service.base_path_api_url() + 'ptipddischargesummary/ipddischargetotalbyendresult';
  //     this.base_path_service.PostRequest(url, body).subscribe((res) => {
  //       if (res[0].json) {
  //         this.list = res[0].json
  //       }
  //     },
  //       (err) => {

  //       })
  //   }
  // }




  //keypress
  // numberOnly(){
  //   const charCode = (event.which) ? event.which : event.keyCode;
  //   if(charCode > 31 && (charCode < 48 or charCode > 57)){
  //     return false;
  //   } 
  //   return true;
  // }



  // userDetails:any;
  // locationList:any;
  // call methos in constructor
  // this.getUserDetails();
  // this.locationListApi()
  getUserDetails(){
    const url = this.base_path_service.base_path_api_url() + 'userRights/details/' + this.Userid;
    this.base_path_service.GetRequest(url).subscribe(res => {
      if (res[0].json.length != 0) {
        this.userDetails = res[0].json;
      }
    },
      err => {
        console.log(err);
      })
  }
  locationListApi(){
    const url = this.base_path_service.base_path_api_url() + 'hospitallocation/getAllHospitalLocations/' + this.Userid;
    this.base_path_service.GetRequest(url).subscribe(res => {
      if (res[0].json.length != 0) {
        this.locationList = res[0].json;
      }
    },
      err => {
        console.log(err);
      })
  }

  selectedlocation(locationValue){
    this.locationid=localStorage.setItem('selectedLocation',locationValue);
    window.location.reload();
  }
  logout(){
    localStorage.clear();
    this.router.navigate(['login'])
  }
}
