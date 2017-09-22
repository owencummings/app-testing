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
  //eventArr: any[];
  eventIndices: any;
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
      //this.eventList = this.firebaseService.getEvents();
      console.log("Getting Events")
      this.eventList = [];
      this.eventIndices =  {};
      firebase.database().ref('/userDb' + '/' + this.firebaseService.id + '/invitedEvents').on('value', (snapshot) => {
        console.log(snapshot.val());
        this.eventIndices = snapshot.val();
        if (this.eventIndices){
          Object.keys(this.eventIndices).forEach(key => {
            var event1;
            firebase.database().ref('/eventDb' + '/' + key).on('value', (snapshot2) => {
              event1 = snapshot2.val();
              this.eventList = this.eventList.filter(ev =>
                ev.id !== event1.id
              );
              this.eventList.unshift(event1); //strange priority stuff here? should use childAdded over value?
            });
            //return eventArr
          })
        }
      })
      //return eventArr;
      //return this.afd.list('/eventDb')
  }

  public goToVote(event){
    this.navCtrl.push(this.groupVotePage, {event: event});
  }

  public goToEvent(event){
    this.navCtrl.push(this.groupEventPage, {event: event});
  }

  public getColor(i){
    switch(i){
      case 0:{
        return 'rgba(248, 187, 208, 0.7)'
      }
      case 1: {
        return 'rgba(244, 143, 177, 0.7)'
      }
      case 2: {
        return 'rgba(240, 98, 146, 0.7)'
      }
      case 3: {
        return 'rgba(236, 64, 122, 0.7)'
      }
      case 4: {
        return 'rgba(233, 30, 99, 0.7)'
      }
      case 5: {
        return 'rgba(216, 27, 96, 0.7)'
      }
      case 6: {
        return 'rgba(194, 24, 91, 0.7)'
      }
      case 7: {
        return 'rgba(173, 20, 87, 0.7)'
      }
      case 8: {
        return 'rgba(136, 14, 79, 0.7)'
      }
    }
  }

  ionViewDidLoad(){
  }

}
