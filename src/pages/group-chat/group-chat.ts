import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { FirebaseService } from '../../providers/firebase-service';
import firebase from 'firebase';


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
  messages = [];
  id = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public firebaseService: FirebaseService, public dataProvider: DataProvider) {
    this.chatBox = "";
  }



  public send(message){
    this.firebaseService.sendMessage(message, this.event);
    this.chatBox = "";
  }

  private getPhoto(uid){
    //console.log(this.event.invitedUsers)
    //console.log(uid)
    var filterArr = this.event.invitedUsers.filter(user => user[0] === uid);
    //console.log(filterArr)
    return filterArr[0][2]
  }

  ionViewDidLoad() {
      console.log(this.dataProvider.data.id)
      this.id = this.dataProvider.data.id
      this.event = this.navParams.get('event');
      firebase.database().ref('/eventDb' + '/' + this.event.id + '/chat').on('child_added', (snapshot) => { //wtf is this
        this.messages.push(snapshot.val())
        console.log(this.messages);
      });
  }

}
