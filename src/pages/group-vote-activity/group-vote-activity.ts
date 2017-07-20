import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the GroupVoteActivityPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-group-vote-activity',
  templateUrl: 'group-vote-activity.html',
})
export class GroupVoteActivityPage {

  event: any = {
    id: -1,
    notification: 0,
    ownerId: -1,
    name: '',
    status: '',
    message: '',
    state: -1,
    voteTime: -1,
    voteTimeSetting: '',
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

  priorityInt: any = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataProvider: DataProvider) {
  }

  ionViewDidLoad() {
    this.event = this.navParams.get('event')
    console.log(this.event);
    for (let vote of this.event.votes){
      if (vote > this.priorityInt){
        this.priorityInt = vote;
      }
    }
    this.priorityInt = this.priorityInt + 1;
  }

  clickActivity(i){
    if ((this.event.votes[i] == this.priorityInt - 1) && (this.event.votes[i] != 0 )){
      this.event.votes[i] = 0;
      this.priorityInt = this.priorityInt - 1;

    } else if (this.event.votes[i] == 0) {
      this.event.votes[i] = this.priorityInt;
      this.priorityInt = this.priorityInt + 1;
    }

  }


  clickReset(){
    var i;
    i = 0;
    while( i < this.event.votes.length){
      this.event.votes[i] = 0;
      i = i + 1;
    }
    this.priorityInt = 1;
    console.log(this.event.votes);
  }



}
