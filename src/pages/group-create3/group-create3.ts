import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { NewEventProvider } from '../../providers/new-event/new-event';
import { GroupCreate4Page } from '../group-create4/group-create4';
/**

/**
 * Generated class for the GroupCreate3Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-group-create3',
  templateUrl: 'group-create3.html',
})
export class GroupCreate3Page {

  groupCreate4Page = GroupCreate4Page;
  dateList: any = [];
  datePicked: any = '';
  timeOption: any = '';

  constructor(public navCtrl: NavController, public navParams: NavParams,
      public dataProvider: DataProvider, public newEventProvider: NewEventProvider,
       public actionSheetCtrl: ActionSheetController) {
      this.dateList = [];
      this.datePicked = '';
      this.timeOption = '';
  }

  public goToGroupCreatePage4(){
    this.navCtrl.push(this.groupCreate4Page);
  }

  presentTimeOptions(){
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Choose a timeframe',
      buttons: [
        {
          text: 'Morning',
          handler: () => {
            this.timeOption = 'Morning'
          }
        },{
          text: 'Noontime',
          handler: () => {
            this.timeOption = 'Noontime'
          }
        },{
          text: 'Afternoon',
          handler: () => {
            this.timeOption = 'Afternoon'
          }
        },{
          text: 'Evening',
          handler: () => {
            this.timeOption = 'Evening'
          }
        },{
          text: 'Late',
          handler: () => {
            this.timeOption = 'Late'
          }
        },{
          text: 'All Day',
          handler: () => {
            this.timeOption = 'All Day'
          }
        },{
          text: 'Cancel',

        }
      ]
    })
    actionSheet.present();
  }

  addToDateList(){
    if (this.datePicked != '' && !this.dateList.includes(this.datePicked)) {
      this.dateList.push(this.datePicked);
    }
    this.datePicked = '';
    console.log(this.dateList);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroupCreate3Page');
  }

}
