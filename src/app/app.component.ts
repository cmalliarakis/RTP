import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireAuth } from 'angularfire2/auth';
//import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'WelcomePage';

  pages: Array<{title: string, component: any,icon:any}>;
  public animateVarible:boolean=false;
  email: any;
  firstname: any;
  lastname: any;
  photo: any;
  locale: any;
  gender: any;
  username: any;
  constructor(public platform: Platform, private storage: Storage, public statusBar: StatusBar, public splashScreen: SplashScreen) {
storage.get('email').then((arg_email) => {
    this.email = arg_email;
  });
storage.get('firstname').then((arg_firstname) => {
      this.firstname = arg_firstname;
  });
storage.get('lastname').then((arg_lastname) => {
        this.lastname = arg_lastname;
  });
storage.get('photo').then((arg_photo) => {
          this.photo = arg_photo;
  });
storage.get('locale').then((arg_locale) => {
            this.locale = arg_locale;
  });
storage.get('gender').then((arg_gender) => {
              this.gender = arg_gender;
  });
storage.get('username').then((arg_username) => {
                this.username = arg_username;
  });

    //this.email = this.Nav.get('param1');
    //this.firstname = this.Nav.get('param2');
    //this.lastname = this.Nav.get('param3');
    //this.photo = this.Nav.get('param4');
    //this.locale = this.Nav.get('param5');
    //this.gender = this.Nav.get('param6');
    //this.username = this.Nav.get('param7');
this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
    { title: 'Summary', component: 'SummaryPage',icon:'banki-summary' },
    { title: 'Accounts', component: 'PersonalAccountPage',icon:'banki-user' },
    { title: 'Transfer Payment', component: 'TransferPage',icon:'banki-transfer' },
    { title: 'Profile', component: 'ProfilePage',icon:'banki-setting' },
    { title: 'About', component: 'ContactUsPage',icon:'banki-location' },

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    //this.nav.setRoot(page);
    //this.navCtrl.push(page, {param1: this.email, param2: this.firstname, param3: this.lastname, param4: this.photo, param5: this.locale, param6: this.gender ,param7: this.username});
    this.nav.push(page, {param1: this.email, param2: this.firstname, param3: this.lastname, param4: this.photo, param5: this.locale, param6: this.gender ,param7: this.username });

  }
}
