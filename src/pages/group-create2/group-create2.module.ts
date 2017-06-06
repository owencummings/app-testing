import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GroupCreate2Page } from './group-create2';

@NgModule({
  declarations: [
    GroupCreate2Page,
  ],
  imports: [
    IonicPageModule.forChild(GroupCreate2Page),
  ],
  exports: [
    GroupCreate2Page
  ]
})
export class GroupCreate2PageModule {}
