import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonalAccountPage } from './personal-account';

@NgModule({
  declarations: [
    PersonalAccountPage,
  ],
  imports: [
    IonicPageModule.forChild(PersonalAccountPage),
  ],
})
export class PersonalAccountPageModule {}
