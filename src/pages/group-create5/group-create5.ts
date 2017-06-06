import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { NewEventProvider } from '../../providers/new-event/new-event';

/**
 * Generated class for the GroupCreate5Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-group-create5',
  templateUrl: 'group-create5.html',
})
export class GroupCreate5Page {

  constructor(public navCtrl: NavController, public navParams: NavParams,
      public dataProvider: DataProvider, public newEventProvider: NewEventProvider) {
  }


  public goToHome(){
    this.navCtrl.popToRoot();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroupCreate5Page');
    console.log(this.newEventProvider.inviteList);
  }

}
