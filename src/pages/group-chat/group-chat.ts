import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';


/**
 * Generated class for the GroupChatPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-group-chat',
  templateUrl: 'group-chat.html',
})
export class GroupChatPage {

  event: any = {
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


  chatBox = '';
  newMessage = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataProvider: DataProvider) {
    this.chatBox = "";
    //this.event = event;
  }



  public send(message){
    if(message && message != "") {
      this.newMessage = {
        id: null,
        time: null,
        userId: this.dataProvider.data.id,
        text: message
      }
      this.event.chat.push(this.newMessage);
    }
    this.chatBox = "";

  }

  ionViewDidLoad() {
      console.log(this.event);
      this.event = this.navParams.get('event');
      console.log(this.event);
  }

}
