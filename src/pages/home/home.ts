import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GroupVotePage } from '../group-vote/group-vote';
import { GroupEventPage } from '../group-event/group-event';
import { GroupCreatePage } from '../group-create/group-create';
import { UserProfilePage } from '../user-profile/user-profile';
import { EventListItemComponent } from '../../components/event-list-item/event-list-item';

const EVENTS: EventListItemComponent[] = [
  {name: 'hey', status: 'now', message: 'pls'},
  {name: 'hey', status: 'now', message: 'pls'},
  {name: 'hey', status: 'now', message: 'pls'}
]



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {
  events = EVENTS;
  groupVotePage = GroupVotePage;
  groupEventPage = GroupEventPage;
  groupCreatePage = GroupCreatePage;
  userProfilePage = UserProfilePage;
  eventListItemComponent = EventListItemComponent;
  constructor(public navCtrl: NavController) {

  }

}
