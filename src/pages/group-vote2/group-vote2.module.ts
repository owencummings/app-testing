import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GroupVote2Page } from './group-vote2';

@NgModule({
  declarations: [
    GroupVote2Page,
  ],
  imports: [
    IonicPageModule.forChild(GroupVote2Page),
  ],
  exports: [
    GroupVote2Page
  ]
})
export class GroupVote2PageModule {}
