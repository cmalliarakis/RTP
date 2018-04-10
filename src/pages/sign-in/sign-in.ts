import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';



@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {
  isLoggedIn:boolean = false;
  users: any;
  userData: any;
  constructor(public modalCtrl: ModalController,private afAuth: AngularFireAuth, private facebook: Facebook, public navCtrl: NavController, public navParams: NavParams) {

    facebook.getLoginStatus()
       .then(res => {
         console.log(res.status);
         if(res.status === "connect") {
           this.isLoggedIn = true;
         } else {
           this.isLoggedIn = false;
         }
       })
       .catch(e => console.log(e));
  }
  //End of constructor


  loginWithFB() {
      this.facebook.login(['email', 'public_profile']).then((response: FacebookLoginResponse) => {
        this.facebook.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)', []).then(profile => {
          this.userData = {email: profile['email'], first_name: profile['first_name'], last_name: profile['last_name'], gender: profile['gender'],locale: profile['locale'], picture: profile['picture_large']['data']['url'], username: profile['name']}

              const facebookCredential = firebase.auth.FacebookAuthProvider.credential(response.authResponse.accessToken);
              firebase.auth().signInWithCredential(facebookCredential);

//this.glVars.setMyGlobalVar(profile['first_name']);
            this.navCtrl.push('SummaryPage', {param1: profile['email'], param2: profile['first_name'], param3: profile['last_name'], param4: profile['picture_large']['data']['url'], param5: profile['locale'], param6: profile['gender'],param7: profile['name']});
        });
      });
    }

  facebookLogin(): Promise<any> {
  return this.facebook.login(['email'])
    .then( response => {
      const facebookCredential = firebase.auth.FacebookAuthProvider
        .credential(response.authResponse.accessToken);

      firebase.auth().signInWithCredential(facebookCredential)
        .then( success => {
          console.log("Firebase success: " + JSON.stringify(success));
        });

    }).catch((error) => { console.log(error) });
}

  getUserDetail(userid) {
    this.facebook.api("/"+userid+"/?fields=id,email,name,picture,gender",["public_profile"])
      .then(res => {
        console.log(res);
        this.users = res;
      })
      .catch(e => {
        console.log(e);
      });
  }

  logout() {
  this.facebook.logout()
    .then( res => this.isLoggedIn = false)
    .catch(e => console.log('Error logout from Facebook', e));
}

  loginFacebook() {
    return this.facebook.login(['email', 'public_profile']).then(res => {
        const facebookCredential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
        return firebase.auth().signInWithCredential(facebookCredential);
      })
}


 doLogin(page) {
    this.navCtrl.setRoot(page);
  }

  // Call Forgot Password Modal
  presentModal(modalPage) {
    let modal = this.modalCtrl.create(modalPage);
    modal.present();
  }

}
