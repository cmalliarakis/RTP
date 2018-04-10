import { Component , ViewChild, ElementRef} from '@angular/core';
import { IonicPage, NavController,ModalController } from 'ionic-angular';
declare var google;

@IonicPage()
@Component({
  selector: 'page-find-us',
  templateUrl: 'find-us.html',
})
export class FindUsPage {
  @ViewChild('map') mapElement: ElementRef;
  text='List';
  map: any;
  start = 'athens, gr';
  end = 'athens, gr';
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;
  constructor(public navCtrl: NavController,public modalCtrl: ModalController) {
  }

  items=[
    {address:'Address 1',type:'bank'},
    {address:'Atm Location',type:'atm'},
    {address:'Address 2',type:'bank'},
    {address:'Address 3',type:'bank'},
  ]

  // call address details modal
  callModal() {
    let modal = this.modalCtrl.create('AddressDetailsPage');
    modal.present();
  }

  // change addresses show
  change(){
    if(this.text != 'Map'){
      this.text = 'Map';
    }
    else{
      this.text='List';
    }
  }

    // logOut Function
  logOut(){
    this.navCtrl.setRoot('WelcomePage');
  }

  // map functions

 ionViewDidLoad(){
    this.initMap();
  }
  initMap() {
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 7,
      center: {lat: 41.85, lng: -87.65}
    });

    this.directionsDisplay.setMap(this.map);
  }

  calculateAndDisplayRoute() {
    this.directionsService.route({
      origin: this.start,
      destination: this.end,
      travelMode: 'DRIVING'
    }, (response, status) => {
      if (status === 'OK') {
        this.directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }

}
