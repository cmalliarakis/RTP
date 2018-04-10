import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-currency-convertor',
  templateUrl: 'currency-convertor.html',
})
export class CurrencyConvertorPage {
  fromCountry='cryptoeuro';
  fromImg='assets/img/usa.png';
  toCountry='euro';
  toImg='assets/img/cad.png';
  amount:number;
  show=false;
  result;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  // change img in select item
  change(){
   this.fromImg='assets/img/' + this.fromCountry + '.png';
   this.toImg='assets/img/' + this.toCountry + '.png';
  }

  // show convert result
  showResult(){
    this.show=true;
    console.log(this.amount);
    if(this.amount==undefined){
      this.result='Please Enter Amount';
    }
    else{
      this.result=2000 +'€';
    }
  }
  // logOut Function
  logOut(){
    this.navCtrl.setRoot('WelcomePage');
  }

}
