import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-account-details',
  templateUrl: 'account-details.html',
})
export class AccountDetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  items=[
    {name:'Product Type', date:'Date Here'},
    {name:'Account Relationship', date:'Date Here'},
    {name:'Account Restrictions', date:'Date Here'},
    {name:'Account Branch', date:'Date Here'},
    {name:'Account status', date:'Date Here'},
    {name:'Uncleared of funds', date:'Date Here'},
    {name:'Amount on hold', date:'Date Here'},
    {name:'Overdraft limit', date:'Date Here'},
  ]
  // goTo Function 
  goTo(page){
    this.navCtrl.push(page);
  }

}
  