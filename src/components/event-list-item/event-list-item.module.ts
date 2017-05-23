import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventListItemComponent } from './event-list-item';

@NgModule({
  declarations: [
    EventListItemComponent,
  ],
  imports: [
    IonicPageModule.forChild(EventListItemComponent),
  ],
  exports: [
    EventListItemComponent
  ]
})
export class EventListItemComponentModule {}
