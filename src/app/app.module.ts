import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { Facebook } from '@ionic-native/facebook';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { IonicStorageModule } from '@ionic/storage';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {HttpModule} from '@angular/http';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFirestoreModule } from 'angularfire2/firestore';
//import { IonicPage, NavController, NavParams } from 'ionic-angular';

var config = {
      backButtonText: '',
      backButtonIcon: 'ios-arrow-round-back',
      iconMode: 'ios',
      mode:'ios',
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
      pageTransition: 'ios',
    };

    var config2 = {
      apiKey: "AIzaSyDHDpF3KJaA0VISPRgoUYwmUzilzz_q4Cs",
          authDomain: "realtimepayment-26228.firebaseapp.com",
          databaseURL: "https://realtimepayment-26228.firebaseio.com",
          projectId: "realtimepayment-26228",
          storageBucket: "realtimepayment-26228.appspot.com",
          messagingSenderId: "52772935985"

        };
@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFirestoreModule.enablePersistence(), //.enablePersistence()
    IonicModule.forRoot(MyApp,config),
    AngularFireModule.initializeApp(config2),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Facebook,
    Camera,
    HttpModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    InAppBrowser,
    AuthProvider,
    AngularFirestore
  ]
})
export class AppModule {}
