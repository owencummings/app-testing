import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GroupVotePage } from '../group-vote/group-vote';
import { GroupEventPage } from '../group-event/group-event';
import { GroupCreatePage } from '../group-create/group-create';
import { UserProfilePage } from '../user-profile/user-profile';
import { DataProvider } from '../../providers/data/data';
import { GroupChatPage } from '../group-chat/group-chat';
import { FirebaseService } from './../../providers/firebase-service';
import { FirebaseListObservable } from 'angularfire2/database';
import firebase from 'firebase';

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

  //eventList: FirebaseListObservable<any[]>;
  eventList: any[];
  //eventList : FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public dataProvider: DataProvider, public firebaseService: FirebaseService) {
      /*
      var ref = firebase.database().ref('eventDb/')
      ref.once('value', function(snapshot){
        console.log(snapshot);
        this.eventList = snapshot;
      })
      */

      /*
      firebaseService.getEvents().subscribe(users => {
        this.eventList = users
      })
      */
      this.eventList = this.firebaseService.getEvents();
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
