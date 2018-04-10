import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-personal-account',
  templateUrl: 'personal-account.html',
})
export class PersonalAccountPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  accounts=[
    {name:'account',firstNums:123,lastNums:12345,currency:32045},
    {name:'account',firstNums:123,lastNums:12345,currency:32045},
    {name:'account',firstNums:123,lastNums:12345,currency:32045},
    {name:'account',firstNums:123,lastNums:12345,currency:32045},
  ]
  // goTo Function 
  goTo(page){
    this.navCtrl.push(page);
  } 

    // logOut Function 
  logOut(){
    this.navCtrl.setRoot('WelcomePage');
  }
}
