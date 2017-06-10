import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { GroupChatPage } from '../group-chat/group-chat';
import { GroupVote2Page } from '../group-vote2/group-vote2'
//import { HomePage } from '../home/home';



@IonicPage()
@Component({
  selector: 'page-group-vote',
  templateUrl: 'group-vote.html',
})
export class GroupVotePage{



  event: Object = {
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


  groupChatPage = GroupChatPage;
  groupVote2Page = GroupVote2Page;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataProvider: DataProvider){
  }

  public goToChat(event){
    console.log(event);
    this.navCtrl.push(this.groupChatPage, {event: event});
  }

  public goToVote2(event){
    console.log(event);
    this.navCtrl.push(this.groupVote2Page, {event: event});
  }

  ionViewDidLoad() {
    console.log(this.event);
    this.event = this.navParams.get('event');
    console.log(this.event);
  }

}
