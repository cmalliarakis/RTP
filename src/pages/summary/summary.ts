import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AngularFireDatabase, AngularFireAction, AngularFireList } from 'angularfire2/database';

import { Observable } from 'rxjs/Observable';
import firebase from 'firebase';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';
//import { HTTP } from '@ionic-native/http';
import 'rxjs/add/operator/map';
import { Http, Headers, Response, RequestOptions} from '@angular/http';
import { AlertController } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

interface Items {
currentbalance: number;
userid: number;
}

@IonicPage()
@Component({
  selector: 'page-summary',
  templateUrl: 'summary.html',
})


export class SummaryPage {
  items$: Observable<AngularFireAction<firebase.database.DataSnapshot>[]>;
  itemsCollection: AngularFirestoreCollection<Items>;
  items2$: Observable<Items[]>;
userid$: BehaviorSubject<string|null>;
  posts: any;
  balance=30;
  netWorth=70;
  deposits=70;
  email: any;
  firstname: any;
  lastname: any;
  photo: any;
  locale: any;
  gender: any;
  username: any;
  currentBalanace: AngularFireList<any>;
  test_response : any;
  constructor(public navCtrl: NavController, private alertCtrl: AlertController, public navParams: NavParams,private http: Http, public storage: Storage, afDatabase: AngularFireDatabase, db: AngularFirestore) {

this.items2$= db.collection('currentBalanace').valueChanges();

this.userid$ = new BehaviorSubject(null);
    this.items$ = this.userid$.switchMap(userid =>
      afDatabase.list('/currentBalance', ref =>
        //userid ? ref.limitToFirst(1) : ref
        userid ? ref.child('userid').orderByChild('userid').equalTo(1)  : ref
      ).snapshotChanges()
    );

//******* START EXAMPLE GET - REST[API] **************//

var json;
let headers2 = {'Content-Type': 'application/json'};
this.http.get('https://www.reddit.com/r/gifs/new/.json?limit=1',headers2).map(res => res.json()).subscribe(data => {
        this.posts = data.data.children;
        //console.log('TEST ' + this.posts.data);
    });

//****** END EXAMPLE GET - REST[API] **************//

//test_response = this.posts.data.json().items[0].str;

//****** START EXAMPLE POST - REST[API] *********//
//curl -iX POST http://ptsv2.com/t/txy12-1523369480/post -d '{"test","test2"}'
//var Indata = {param:'"fromFacebookName":"psebos","toFacebookName":"malliarakis","amount":"10"'}
let headers = new Headers(
{
  'Content-Type' : 'application/json'
});
let options = new RequestOptions({ headers: headers });

var content = JSON.stringify({
      name: 'my name'
    });
this.http.post("http://ptsv2.com/t/txy12-1523369480/post", '"fromFacebookName":"psebos","toFacebookName":"malliarakis","amount":"10"',options)
            .subscribe(data => {
                var alert = this.alertCtrl.create({title: "Data String",subTitle: data.json().data ,buttons: ["close"]
                });
                alert.present();
            }, error => {
                console.log('ERRRROR', JSON.stringify(error.json()));
            });

  /*  var ref = firebase.database().ref("currentBalance");
    ref.once("value")
      .then(function(snapshot) {
        //var currentvalue = snapshot.child("name/first").val(); // "Ada"
        var userid = snapshot.child("userid").child("last").val(); // "Lovelace"
        //var age = snapshot.child("age").val(); // null
      });


firebase.database().ref('/currentBalance').once('value', (snapshot) => {
let users = [];
 snapshot.forEach(snap => {
   users.push(snap.val().name); //or snap.val().name if you just want the name and not the whole object
   return false;   //<=THIS IS WHAT WAS MISSING!!!!!
 });
});
*/
//this._db = firebase.database().ref('/'); // Get a firebase reference to the root this._todosRef = firebase.database().ref('todos'); // Get a firebase reference to the todos
  this.email = navParams.get('param1');
    storage.set('email', this.email);

this.firstname = navParams.get('param2');
if (this.firstname == null) {} else{
storage.set('firstname', this.firstname)};
this.lastname = navParams.get('param3');
if (this.lastname == null) {} else{storage.set('lastname', this.lastname);}
this.photo = navParams.get('param4');
if (this.photo == null) {} else{storage.set('photo', this.photo)};
this.locale = navParams.get('param5');
if (this.locale == null) {} else{storage.set('locale', this.locale)};
this.gender = navParams.get('param6');
if (this.gender == null) {} else{storage.set('gender', this.gender)};
this.username = navParams.get('param7');
if (this.username == null) {} else{storage.set('username', this.username)};

  }


  // goTo Function
  goTo(page){
    //this.navCtrl.setRoot(page);
    this.navCtrl.push(page, {param1: this.email, param2: this.firstname, param3: this.lastname, param4: this.photo, param5: this.locale, param6: this.gender ,param7: this.username});

  }


        /*  return this.http.post(apiUrl, JSON.stringify(data))
              .map((response: Response) => {
                  return response.json();
              }); */
      //}

  filterBy(userid: string|null) {
      this.userid$.next(userid);
    }

    getUsers() {
        return this.http.get('whateverURL');
    }

    getHalls() {
               return this.http.get('test' + 'hall.json').map((res:Response) => res.json());
        }


    post(apiUrl: string, data: any = {}) {
        return this.http.post(apiUrl, JSON.stringify(data))
            .map((response: Response) => {
                return response.json();
            });
    }
  // logOut Function
  logOut(){
    this.navCtrl.setRoot('WelcomePage');
  }
}
