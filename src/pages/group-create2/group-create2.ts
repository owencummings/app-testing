import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { NewEventProvider } from '../../providers/new-event/new-event';
import { GroupCreate3Page } from '../group-create3/group-create3';
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
  friendName: any = '';


  constructor(public navCtrl: NavController, public navParams: NavParams,
      public dataProvider: DataProvider, public newEventProvider: NewEventProvider) {
    this.alterFriends = 'add';
    this.friends = this.dataProvider.searchFriends('');
    this.users = [this.dataProvider.data.id];
  }

  public goToGroupCreatePage3(){
    if (this.users != [this.dataProvider.data.id]){
      this.newEventProvider.inviteList = this.users;
      this.navCtrl.push(this.groupCreate3Page);
    }
  }

  public getFriendList(searchTerm){
    this.friends = this.dataProvider.searchFriends(searchTerm);
  }

  addTo(friendId){
    if (!this.users.includes(friendId)){
      this.users.push(friendId);
    }
    this.friendName = '';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroupCreate2Page');
  }

}
