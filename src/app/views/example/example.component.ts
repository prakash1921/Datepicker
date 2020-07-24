import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { ExcelService } from 'src/app/services/excel.service';
@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
  data: any = [{
    eid: 'e101',
    ename: 'ravi',
    esal: 1000
    },{
    eid: 'e102',
    ename: 'ram',
    esal: 2000
    },{
    eid: 'e103',
    ename: 'rajesh',
    esal: 3000
    }];
    minDate = new Date(2017, 5, 10);
    maxDate = new Date(2018, 9, 15);
    myForm;
    constructor(private excelService:ExcelService,private fb: FormBuilder,){
    }
    ngOnInit() {
      this.myForm = this.fb.group({
        myDate: new FormControl(new Date())
      });
      
    }
    exportAsXLSX():void {
       this.excelService.exportAsExcelFile(this.data, 'sample');
    
  
  }

}
