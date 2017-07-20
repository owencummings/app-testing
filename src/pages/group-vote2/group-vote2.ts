import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { GroupVoteActivityPage } from '../group-vote-activity/group-vote-activity'
import { GroupVoteTimePage } from '../group-vote-time/group-vote-time'

/**
 * Generated class for the GroupVote2Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-group-vote2',
  templateUrl: 'group-vote2.html',
})
export class GroupVote2Page {


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

  yourLocationVote: any = -1;
  yourTimeVote: any = -1;


  groupVoteActivityPage = GroupVoteActivityPage;
  groupVoteTimePage = GroupVoteTimePage;
  constructor(public navCtrl: NavController, public navParams: NavParams, public dataProvider: DataProvider) {
  }

  ionViewDidLoad() {
    this.event = this.navParams.get('event');
    console.log(this.event)
    this.yourLocationVote = this.event.votes.filter(
      vote => vote.id === this.dataProvider.data.id
     );
     console.log(this.yourLocationVote);
  }

  public goToVoteActivity(event){
    this.navCtrl.push(this.groupVoteActivityPage, {event: event})
  }

  public goToVoteTime(event){
    this.navCtrl.push(this.groupVoteTimePage, {event: event})

  }




}
