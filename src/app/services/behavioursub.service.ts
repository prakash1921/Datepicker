import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BehavioursubService {

  constructor() { }

  private otpdata = new BehaviorSubject<any>('');
  otpvalue = this.otpdata.asObservable();

  private normalData = new BehaviorSubject<any>('');
  normalValue = this.normalData.asObservable();

  sendData(newData){
    this.otpdata.next(newData);
  }

  sendnormalValue(newData){
    this.normalData.next(newData);
  }
}
