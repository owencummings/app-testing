import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the NewEventProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class NewEventProvider {


  name: any =  [];
  voteDate: any = [];
  inviteList: any = [];
  dateList: any = [];
  timeSetting: any = [];
  eventList: any = [];

  constructor() {
    console.log('Hello NewEventProvider Provider');
  }

}
