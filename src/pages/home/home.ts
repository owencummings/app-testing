import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GroupVotePage } from '../group-vote/group-vote';
import { GroupEventPage } from '../group-event/group-event';
import { GroupCreatePage } from '../group-create/group-create';
import { UserProfilePage } from '../user-profile/user-profile';
import { DataProvider } from '../../providers/data/data';
import { GroupChatPage } from '../group-chat/group-chat';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {
  groupVotePage = GroupVotePage;
  groupEventPage = GroupEventPage;
  groupCreatePage = GroupCreatePage;
  userProfilePage = UserProfilePage;
  groupChatPage = GroupChatPage;
  constructor(public navCtrl: NavController, public navParams: NavParams, public dataProvider: DataProvider) {

  }

  public goToVote(event){
    this.navCtrl.push(this.groupVotePage, {event: event});
  }

  public goToEvent(event){
    this.navCtrl.push(this.groupEventPage, {event: event});
  }

  ionViewDidLoad(){
  }

}
