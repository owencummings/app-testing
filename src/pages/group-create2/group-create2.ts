import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { FirebaseService } from '../../providers/firebase-service';
import { NewEventProvider } from '../../providers/new-event/new-event';
import { GroupCreate3Page } from '../group-create3/group-create3';
import firebase from 'firebase';
/**
 * Generated class for the GroupCreate2Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-group-create2',
  templateUrl: 'group-create2.html',
})
export class GroupCreate2Page {

  groupCreate3Page = GroupCreate3Page;

  users: any = [];
  alterFriends: any = [];
  friends: any =  [];
  allFriends: any = []
  friendName: any = '';


  constructor(public navCtrl: NavController, public navParams: NavParams, public firebaseService: FirebaseService,
      public dataProvider: DataProvider, public newEventProvider: NewEventProvider) {
    this.alterFriends = 'add';
    this.allFriends = []
    firebase.database().ref('/userDb' + '/' + this.firebaseService.id + '/friendsList').on('child_added', (snapshot) => {
      console.log(snapshot.key)
      console.log(snapshot.val())
      firebase.database().ref('/userDb' + '/' + snapshot.key + '/profilePicture').once('value', (snapshot2) => {
        this.allFriends.push([snapshot.key, snapshot.val(), snapshot2.val()]);
        console.log(this.allFriends);
        this.getFriendList('');
      });
    });
    console.log(this.friends)
    this.users = [];
    this.users.push([this.dataProvider.data2.id, this.dataProvider.data2.name , this.dataProvider.data2.profilePicture])
  }

  public goToGroupCreatePage3(){
    if (this.users != [this.dataProvider.data.id]){
      this.newEventProvider.inviteList = this.users;
      console.log(this.users);
      this.navCtrl.push(this.groupCreate3Page);
    }
  }

  public getFriendList(searchTerm){
    /*this.friends = this.firebaseService.searchFriends(searchTerm);*/
    var arr = []
    this.allFriends.forEach(  function(friend){
      if (friend[1].toLowerCase().indexOf(searchTerm.toLowerCase()) > -1){ //friend 1 is display name, filter on name
        console.log(friend)
        arr.push(friend)
      }
    })
    console.log(arr)
    this.friends = arr
  }

  addTo(friendId){
    console.log(friendId);
    if (!this.users.includes(friendId)){
      this.users.push(friendId);
    }
    console.log(this.users);
    this.friendName = '';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroupCreate2Page');
  }

}
