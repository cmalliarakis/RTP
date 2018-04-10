import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-beneficiaries',
  templateUrl: 'beneficiaries.html',
})
export class BeneficiariesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  // goTo Function 
  goTo(page){
    this.navCtrl.push(page);
  }
  
  // logOut Function 
  logOut(){
    this.navCtrl.setRoot('WelcomePage');
  }
}
