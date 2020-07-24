import { Component, OnInit } from '@angular/core';
// import {Moment} from 'moment';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { GlobalService } from 'src/app/services/GlobalServices';
import { DatePipe } from '@angular/common';
import { ValidationManager } from 'ng2-validation-manager';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  form;
  FromDate: Date;
  ToDate: Date;
  dischargedate: any;
  nextdate: any;
  locationid: any;
  perday: number = 0;
  currentdate: Date;
  value: Date;
  addtotal: number = 0;
  myArray: any = [];
  available: any = [];
  occupied: any = [];
  totalpatient: any;
  itotal: number = 0;
  atotal: number = 0;
  IPDP: number = 0;
  OPDI: number = 0;
  IPDI: number = 0;
  Otatal: any;
  Ttotal: any;
  trafficYearlyIncome: any = [];
  newDate: any;
  months: any = [];
  data: any;
  Paid: number = 0;
  Bal: number = 0;
  total: number = 0;
  amount: number = 0;
  IPDperdays: any;
  OPDperdays: any = [];
  Income: any = [];
  from: string;
  to: string;
  // selected:{startDate:Moment,endDate:Moment};
  Next: string;
  maxDate: any;
  minDate: any;
  listNameEditMode: boolean = true;
  listNameEditModes: boolean = false;
  refund: number = 0;
  disc: number = 0;
  date: any;
  Bala: number = 0;
  prebal: number = 0;
  OPDBAL: any;
  OPDB: any;
  deltotal: number = 0;
  IPDBAL: number = 0;
  IPDPAID: number = 0;
  count: any;
  TPAAMOUNT: number;
  amounttpa: any;
  amountbal: any;
  TPABAL: number;
  details: any = [];
  TotalPatientCount: number;
  IPDPatientCount: number;
  DischargePatientCount: number;
  RefundAmount: number;
  OPDPatientPaidAmount: number;
  OPDRE: number = 0;
  IPDRE: number = 0;
  constructor(private datePipe: DatePipe, public activatedRouter: ActivatedRoute, public toastr: ToastrManager, private router: Router, private base_path_service: GlobalService) {

  }


  ngOnInit() {
    this.maxDate = new Date();
    this.minDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    this.maxDate.setDate(this.maxDate.getDate());
    this.form = new ValidationManager({
      'FromDate': 'required',
      'ToDate': 'required',
      'preDate': '',
      'IPDPatient': '',
      'OPDPatient': '',
      'Income': '',
      'OPDIncome': '',
      'IPDIncome': '',
      'totalbed': '',
      'Avalibale': '',
      'Occupied': ''

    })
    this.getCurrenDate();
  }

  oncheckboxclick() {
    if (this.listNameEditMode) {
      this.listNameEditMode = false;
      this.listNameEditModes = true;
    } else {
      this.listNameEditMode = true;
      this.listNameEditModes = false;
    }
  }

  min(value: Date): void {
    this.minDate = value;
    this.minDate = this.minDate;
    this.minDate.setDate(this.minDate.getDate());
  }

  getCurrenDate() {
    this.currentdate = new Date();
    const date = this.datePipe.transform(this.currentdate, 'yyyy-MM-dd');
    this.form.setValue({
      "FromDate": date,
      "ToDate": date,
      "PerDate": date
    });
  }


}
