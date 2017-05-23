import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GroupEventPage } from './group-event';

@NgModule({
  declarations: [
    GroupEventPage,
  ],
  imports: [
    IonicPageModule.forChild(GroupEventPage),
  ],
  exports: [
    GroupEventPage
  ]
})
export class GroupEventPageModule {}
