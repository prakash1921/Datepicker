import { Component, OnInit } from '@angular/core';
import { NgbTypeaheadConfig } from '@ng-bootstrap/ng-bootstrap'
import { DatePipe } from '@angular/common';
import { ValidationManager } from 'ng2-validation-manager';
import {NgbTypeahead} from '@ng-bootstrap/ng-bootstrap';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
// import { ToastrManager } from 'ng6-toastr-notifications';
import { GlobalService } from 'src/app/services/GlobalServices';
import { Observable } from 'rxjs'
import { Http, Response } from '@angular/http';
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-typeahead',
  templateUrl: './typeahead.component.html',
  styleUrls: ['./typeahead.component.css'],
  providers: [NgbTypeaheadConfig, DatePipe]
})
export class TypeaheadComponent implements OnInit {
  form:FormGroup;
  maxDate: Date;
  currentdate: Date;
  splittime: string;
  userdata:any=[];
  UserList:any=[];
  myDateValue: Date;
  // dropdownList = [];
  // selectedItems = [];
  // dropdownSettings = {};
  dropdownList = [
    { item_id: 1, item_text: 'Mumbai' },
    { item_id: 2, item_text: 'Bangaluru' },
    { item_id: 3, item_text: 'Pune' },
    { item_id: 4, item_text: 'Navsari' },
    { item_id: 5, item_text: 'New Delhi' }
  ];
  selectedItems = [
    { item_id: 3, item_text: 'Pune' },
    { item_id: 4, item_text: 'Navsari' }
  ];
  dropdownSettings = {
    singleSelection: false,
    idField: 'item_id',
    textField: 'item_text',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 3,
    allowSearchFilter: true
  };
  constructor(private fb: FormBuilder, private datePipe: DatePipe,public router: Router, public activatedRouter: ActivatedRoute, private http: Http, private base_path_service: GlobalService) { }
  // constructor(private datePipe: DatePipe,public router: Router, public activatedRouter: ActivatedRoute, private http: Http, private base_path_service: GlobalService,public toastr: ToastrManager) { }

  ngOnInit() {
    this.maxDate = new Date();
    this.maxDate.setDate(this.maxDate.getDate());
    // this.form = this.fb.group({
      // UserName: ['', Validators.required],
      // Date: [''],
      // Time: ['']

    // });
    // this.setValueform.({
      // 'UserName':' ',
      // 'Date': '',
      // 'Time': '',
    // })
    // this.form = new ValidationManager({
    //   'UserName': 'required',
    //   ' Date': '',
    //   'Time': ''
    // })
    this.myDateValue = new Date();
    this.getdate();
    this.getCurrentDate();
    this.getuserlist();
    
  }
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  getdate() {
    const time = this.datePipe.transform(new Date(), 'H:mm');
    this.splittime = this.datePipe.transform(new Date(), 'H:mm:ss.s');
    // this.form.setValue({
    //   'Time': time
    // })
  }
  getCurrentDate() {
    this.currentdate = new Date();
    const date = this.datePipe.transform(this.currentdate, 'yyy-MM-dd');
    // this.form.setValue({
    //   'Date': date
    // })
  }
  UserDetails(e){
    console.log("items",e.item);
    console.log("items username",e.item.name)
  }




getuserlist(){
  const url = this.base_path_service.base_path_api_url() + 'usertype/userlist';
  this.http.get(url).map((res: Response) => res.json()).subscribe(
    (success) => {
      console.log("successss user data", success);
      this.UserList = success;
      console.log("otp", this.UserList);

    },
    (error) => alert("error" + error)
  )
}

  
  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      // map(term => term === '' ? []
      //   : this.UserList.filter(v =>
      //     v.UserName && v.UserName.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 10))
  //     map(term => (term === '' ? this.UserList
  //     : this.UserList.filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 10))
  // );

  map(term => term.length < 2 ? []
    : this.UserList.filter(v => v.name
      .toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    );
   formatter = (x: {name: string}) => x.name;

   save(){
     console.log("jjj");
     var data = this.form.value;
     data.billdateforformat = this.datePipe.transform(data.Date,'dd-MM-yyyy');
     const url = this.base_path_service.base_path_api_url() + 'userdate/save';
     this.http.post(url, data).map((res: Response) => res.json()).subscribe(
       (success) => {
         console.log("successss",success)      
        },
       (error) => alert("error" + error)
     )
   }

   dateOnChange(){
     console.log("date on change")
   }
   onDateChange(newDate: Date) {
    console.log(newDate);
  }
}
