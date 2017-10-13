import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { NewEventProvider } from '../../providers/new-event/new-event';
import { GroupCreate2Page } from '../group-create2/group-create2';
/**
 * Generated class for the GroupCreatePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-group-create',
  templateUrl: 'group-create.html',
})
export class GroupCreatePage {

  groupCreate2Page = GroupCreate2Page;
 /*
  event: any = {
    id: -1,
    notification: 0,
    ownerId: -1,
    name: '',
    status: '',
    message: '',
    state: -1,
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
  */

  name: any = '';
  date: any = '';
  minTime: any = '';
  /*
  activities: any = [];
  dates: any =  [];
  times: any =  [];
  voteTime: any = [];
  users: any = [];
  section: any = 'overview';
  alterFriends: any = 'add';
  activityInput: any = '';
  friendName: string = '';
  friends: any = [];
  timeRange: any = ''; */



  constructor(public navCtrl: NavController, public navParams: NavParams,
      public dataProvider: DataProvider, public newEventProvider: NewEventProvider ) {


    this.name = '';
    this.date = '';
    this.minTime = '';
    /*
    this.activities = [];
    this.dates = [];
    this.times = [];
    this.users = [this.dataProvider.data.id];
    this.activityInput = '';
    this.friends = this.dataProvider.searchFriends('');
    this.friendName = '';
    this.timeRange = ''; */
  }

  public goToGroupCreatePage2(){
    if (this.name != '' && this.date !== ''){
      this.newEventProvider.name = this.name;
      var offset = (new Date).getTimezoneOffset()/60;
      this.newEventProvider.voteDate = this.date + '-' + offset + ':00';
      this.navCtrl.push(this.groupCreate2Page);
    }
    console.log(this.newEventProvider.name);
    console.log(this.newEventProvider.voteDate);
  }



/*


  public showTimes(){

  }

  public reset(){
    this.activities=[];
    this.dates=[];
    this.times=[];
    this.users=[];
    this.name='';
  }

  public addActivity(keyCode){
    if (this.activityInput != '' && keyCode == 13) {
      this.activities.push(this.activityInput)
      this.activityInput = '';
    }
  }

  public createGroup(){
    if (this.activities.length && this.dates.length && this.times.length && this.name ){
      this.event = {
        id: -1,
        notification: 1,
        ownerId: this.dataProvider.data.id,
        name: this.name,
        status: 'Vote time formatting needed.',
        message: 'Event created.',
        state: 0,
        voteTime: null,
        voteTimeOptions: this.times,
        voteDayOptions: this.dates,
        voteLocationActivityOptions: this.activities,
        eventTime: -1,
        eventDate: '',
        eventActivity: '',
        invitedUsers: this.users,
        chat: [],
        votes: [],
      }
      this.dataProvider.data.eventDb.push(this.event);
      this.navCtrl.pop();
    }
  }
*/
  ionViewDidLoad() {
    console.log('Hello, world!')
    this.minTime = (new Date()).toISOString();
    var local = new Date; //today (local time)
    var offset = local.getTimezoneOffset()
    console.log(local);
    console.log(offset/60);

  }

}
