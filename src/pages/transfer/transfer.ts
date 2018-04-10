import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-transfer',
  templateUrl: 'transfer.html',
})
export class TransferPage {
  fromAccount='account';
  toAccount='account';
   amount:number;
  show=false;
  result;
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

  // transform result
  showResult(){
    this.show=true;
    if(this.fromAccount != 'account'){
      if(this.toAccount != 'account'){
        if(this.amount==undefined){
          this.result='Please Enter Amount';
        }
        else{
          this.result='Transfer Successful';
        }
      }
      else{
        this.result='Please Select To Account';
      }
    }
    else{
      this.result='Please Select From Account';
    }
  }

  // logOut Function
  logOut(){
    this.navCtrl.setRoot('WelcomePage');
  }

}
