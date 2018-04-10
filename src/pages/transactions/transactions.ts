import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-transactions',
  templateUrl: 'transactions.html',
})
export class TransactionsPage {
  email: any;
  firstname: any;
  lastname: any;
  photo: any;
  locale: any;
  gender: any;
  username: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.email = navParams.get('param1');
this.firstname = navParams.get('param2');
this.lastname = navParams.get('param3');
this.photo = navParams.get('param4');
this.locale = navParams.get('param5');
this.gender = navParams.get('param6');
this.username = navParams.get('param7');
  }
  items=[
    {date:'15-8-2017',cost:1000,address:'ATM Withdrawal 12 Street Name'},
    {date:'15-8-2017',cost:1000,address:'ATM Withdrawal 12 Street Name'},
    {date:'15-8-2017',cost:1000,address:'ATM Withdrawal 12 Street Name'},
    {date:'15-8-2017',cost:1000,address:'ATM Withdrawal 12 Street Name'},
  ]
  // goTo Function
  goTo(page){
    this.navCtrl.push(page);
  }
}
