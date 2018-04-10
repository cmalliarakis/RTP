import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-update-profile',
  templateUrl: 'update-profile.html',
})
export class UpdateProfilePage {
  //fullName='Adam Nicolas Taylor Smith';
  country='Greece';
  city='Athens';
  phone=12345343543;
  //email='Adam_Nicolas@gmail.com';
  email: any;
  firstname: any;
  lastname: any;
  photo: any;
  locale: any;
  gender: any;
  username: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.email = navParams.get('param1');
this.firstname = navParams.get('param2');
this.lastname = navParams.get('param3');
this.photo = navParams.get('param4');
this.locale = navParams.get('param5');
this.gender = navParams.get('param6');
this.username = navParams.get('param7');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }


}
