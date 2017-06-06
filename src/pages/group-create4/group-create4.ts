import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { NewEventProvider } from '../../providers/new-event/new-event';
import { GroupCreate5Page } from '../group-create5/group-create5';

/**
 * Generated class for the GroupCreate4Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-group-create4',
  templateUrl: 'group-create4.html',
})
export class GroupCreate4Page {

  groupCreate5Page = GroupCreate5Page;
  activities: any = [];
  activityInput: any = '';

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public dataProvider: DataProvider, public newEventProvider: NewEventProvider) {
    this.activities = [];
    this.activityInput = '';

  }

  public goToGroupCreatePage5(){
    this.navCtrl.push(this.groupCreate5Page);
  }

  public addActivity(keyCode){
    if (this.activityInput != '' && keyCode == 13) {
      this.activities.push(this.activityInput)
      this.activityInput = '';
    }
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad GroupCreate4Page');
  }

}
