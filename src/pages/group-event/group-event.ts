import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { GroupChatPage } from '../group-chat/group-chat';

/**
 * Generated class for the GroupEventPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-group-event',
  templateUrl: 'group-event.html',
})
export class GroupEventPage {

    event: Object = {
      id: -1,
      notification: 0,
      ownerId: -1,
      name: '',
      status: '',
      message: '',
      state: -1,
      voteTime: -1,
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

    constructor(public navCtrl: NavController, public navParams: NavParams, public dataProvider: DataProvider){
    }

    public goToChat(event){
      this.navCtrl.push(this.groupChatPage, {event: event});
    }

    ionViewDidLoad() {
      this.event = this.navParams.get('event');
    }
}
