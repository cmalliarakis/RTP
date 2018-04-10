import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  email: any;
  firstname: any;
  lastname: any;
  photo: any;
  locale: any;
  gender: any;
  username: any;
  constructor(public camera:Camera,public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
    this.email = navParams.get('param1');
    this.firstname = navParams.get('param2');
    this.lastname = navParams.get('param3');
    this.photo = navParams.get('param4');
    this.locale = navParams.get('param5');
    this.gender = navParams.get('param6');
    this.username = navParams.get('param7');

  }
  // call address details modal
  callModal() {
    let modal = this.modalCtrl.create('UpdateProfilePage');
    modal.present();
  }

    // change Image
  base64Image='assets/img/profile.png';
  accessGallery(){
   this.camera.getPicture({
     sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
     destinationType: this.camera.DestinationType.DATA_URL
    }).then((imageData) => {
      this.base64Image = 'data:image/jpeg;base64,'+imageData;
     }, (err) => {
      console.log(err);
    });
  }

    // logOut Function
  logOut(){
    this.navCtrl.setRoot('WelcomePage');
  }

}
