import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { FirebaseService } from '../../providers/firebase-service';
import firebase from 'firebase';

/**
 * Generated class for the GroupVoteTimePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-group-vote-time',
  templateUrl: 'group-vote-time.html',
})
export class GroupVoteTimePage {

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


  voteArray: any[] = [];
  dualValue: any= {
    lower: 0,
    upper: 24
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public firebaseService: FirebaseService, public dataProvider: DataProvider) {
  }

  ionViewDidLoad() {
    this.event = this.navParams.get('event')
    var uid = this.firebaseService.id;
    if (this.event.timeVotes){
      if (this.event.timeVotes[uid] !== null){
        console.log('Has proper key.')
        this.voteArray = this.event.timeVotes[uid]
      } else {
        this.voteArray = new Array(this.event.voteDayOptions.length)
        var rangeStart = {
          lower: 0,
          upper: 24
        }
        this.voteArray.fill(rangeStart)
        firebase.database().ref('/eventDb/' + this.event.id + '/timeVotes' + '/' + this.firebaseService.id).set(this.voteArray);
      }
    } else {
      this.voteArray = new Array(this.event.voteDayOptions.length)
      var rangeStart = {
        lower: 0,
        upper: 24
      }
      this.voteArray.fill(rangeStart)
      firebase.database().ref('/eventDb/' + this.event.id + '/timeVotes' + '/' + this.firebaseService.id).set(this.voteArray);
    }
    console.log(this.voteArray)
  }


  private clickReset(){
    //should return all ranges back to their maximum
    var i = 0;
    while (i < this.voteArray.length){
      this.voteArray[i].lower = 0;
      this.voteArray[i].upper = 24;
    }
    console.log(this.voteArray);
  }

  private lockIn(){
    //should send time votes to firebase
    firebase.database().ref('/eventDb/' + this.event.id + '/timesVotes/' + this.firebaseService.id).set(this.voteArray);
    this.navCtrl.pop();
  }

  public getMinTime(eventTimeOption){
    if (eventTimeOption == 'Morning'){
      return '5 AM';
    }
    if (eventTimeOption == 'Noontime'){
      return '10 AM';
    }
    if (eventTimeOption == 'Afternoon'){
      return '1 PM';
    }
    if (eventTimeOption == 'Evening'){
      return '4 PM';
    }
    if (eventTimeOption == 'Late'){
      return '8 PM';
    }
    if (eventTimeOption == 'All Day'){
      return '12 AM' ;
    }
  }

  public getMaxTime(eventTimeOption){
    if (eventTimeOption == 'Morning'){
      return '11 AM';
    }
    if (eventTimeOption == 'Noontime'){
      return '3 PM';
    }
    if (eventTimeOption == 'Afternoon'){
      return '7 PM';
    }
    if (eventTimeOption == 'Evening'){
      return '10 PM';
    }
    if (eventTimeOption == 'Late'){
      return '2 AM';
    }
    if (eventTimeOption == 'All Day'){
      return '12 AM' ;
    }
  }

}
