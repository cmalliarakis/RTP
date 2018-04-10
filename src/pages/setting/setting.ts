import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyApp } from '../../app/app.component';

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {
  language='en';
  public action = false;
  constructor(public _myApp:MyApp,public navCtrl: NavController) {
    this.action = this._myApp.animateVarible;
    }
// animate Function variable animateVarible in app.component
public checkbox;
animateApp(e:any){ 
  this._myApp.animateVarible = e.checked;
  this.action = this._myApp.animateVarible;
  }


    // logOut Function 
  logOut(){
    this.navCtrl.setRoot('WelcomePage');
  }
}
