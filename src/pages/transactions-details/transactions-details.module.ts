import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TransactionsDetailsPage } from './transactions-details';

@NgModule({
  declarations: [
    TransactionsDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(TransactionsDetailsPage),
  ],
})
export class TransactionsDetailsPageModule {}
