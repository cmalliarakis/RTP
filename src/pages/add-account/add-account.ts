import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-add-account',
  templateUrl: 'add-account.html',
})
export class AddAccountPage {
  nickName;
  accountNumber;
  show=false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  // go to another page function
  setRootFun(page){
    this.navCtrl.setRoot(page);
  }
  // appear add Button function
  apperAddBtn(){
    this.show=true;
  }

  // Clear input for add new account
  newAdd(){
    this.nickName='';
    this.accountNumber='';
  }
}
