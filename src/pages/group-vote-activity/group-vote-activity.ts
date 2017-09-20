import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { FirebaseService } from '../../providers/firebase-service';
import firebase from 'firebase';
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
  voteArray: any[] = [];


  constructor(public navCtrl: NavController, public navParams: NavParams,
    public firebaseService: FirebaseService, public dataProvider: DataProvider) {
  }



  ionViewDidLoad() {
    this.event = this.navParams.get('event')
    console.log(this.event);

    var uid = this.firebaseService.id;
    this.priorityInt = 1;
    if (this.event.activityVotes){
      if (this.event.activityVotes[uid] !== null){
        console.log('Has proper key.')
        this.voteArray = this.event.activityVotes[uid]
        var intCounter = 0;
        var i = 0;
        while (i < this.voteArray.length){
          if (this.voteArray[i] > intCounter){
            intCounter = this.voteArray[i]
          }
          i = i + 1;
        }
        this.priorityInt = intCounter + 1;
      } else {
        this.voteArray = new Array(this.event.voteLocationActivityOptions.length)
        this.voteArray.fill(0)
        firebase.database().ref('/eventDb/' + this.event.id + '/activityVotes' + '/' + this.firebaseService.id).set(this.voteArray);
      }
    } else {
      this.voteArray = new Array(this.event.voteLocationActivityOptions.length)
      this.voteArray.fill(0)
      firebase.database().ref('/eventDb/' + this.event.id + '/activityVotes' + '/' + this.firebaseService.id).set(this.voteArray);
    }
    console.log(this.voteArray)
    console.log(this.priorityInt)
  }

  clickActivity(i){
    if ((this.voteArray[i] == this.priorityInt - 1) && (this.voteArray[i] != 0 )){
      this.voteArray[i] = 0;
      this.priorityInt = this.priorityInt - 1;

    } else if (this.voteArray[i] == 0) {
      this.voteArray[i] = this.priorityInt;
      this.priorityInt = this.priorityInt + 1;
    }
    firebase.database().ref('/eventDb/' + this.event.id + '/activityVotes' + '/' + this.firebaseService.id).set(this.voteArray);

  }


  clickReset(){
    var i;
    i = 0;
    this.voteArray = new Array(this.event.voteLocationActivityOptions.length)
    this.voteArray.fill(0)
    firebase.database().ref('/eventDb/' + this.event.id + '/activityVotes' + '/' + this.firebaseService.id).set(this.voteArray);
    this.priorityInt = 1;
  }



}
