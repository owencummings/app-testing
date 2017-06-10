import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { NewEventProvider } from '../../providers/new-event/new-event';

/**
 * Generated class for the GroupCreate5Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-group-create5',
  templateUrl: 'group-create5.html',
})
export class GroupCreate5Page {


   event: any = {
     id: -1,
     notification: 0,
     ownerId: -1,
     name: '',
     status: '',
     message: '',
     eventStage: -1,
     voteTime: -1,
     voteTimeOptions: [],
     voteDayOptions: [],
     voteLocationActivityOptions: [],
     eventTime: -1,
     eventDate: '',
     eventActivity: '',
     invitedUsers: [],
     chat: [],
     votes: [],
   };


  constructor(public navCtrl: NavController, public navParams: NavParams,
      public dataProvider: DataProvider, public newEventProvider: NewEventProvider) {
  }


  public goToHome(){
    this.event = {
      id: -1,
      notification: 1,
      ownerId: this.dataProvider.data.id,
      name: this.newEventProvider.name,
      status: 'Vote time formatting needed.',
      message: 'Event created.',
      eventStage: 0,
      voteTime: null,
      voteTimeOptions: this.newEventProvider.timeSetting,
      voteDayOptions: this.newEventProvider.dateList,
      voteLocationActivityOptions: this.newEventProvider.eventList,
      eventTime: -1,
      eventDate: '',
      eventActivity: '',
      invitedUsers: this.newEventProvider.inviteList,
      chat: [],
      votes: []
    }
    this.dataProvider.data.eventDb.push(this.event);
    this.navCtrl.popToRoot();
    console.log(this.dataProvider.data)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroupCreate5Page');
    console.log(this.newEventProvider.inviteList);
  }

}
