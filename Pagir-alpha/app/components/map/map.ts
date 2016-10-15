import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {  LoadingController, App } from 'ionic-angular';
import { Geolocation } from 'ionic-native';
import { Observable } from 'rxjs/Observable';
import { Pickup } from '../pickup/pickup';
import { Drop } from '../drop/drop';

@Component({
  selector: 'map',
  templateUrl: 'build/components/map/map.html',
  directives: [Pickup, Drop]
})
export class MapComponent implements OnInit {
  @Input() public isStartMarked: boolean;
  @Input() public isEndMarked: boolean;
  @Output() pickupAddress = new EventEmitter();
  @Output() dropAddress = new EventEmitter();

  public map: google.maps.Map;
  public currentLocation: google.maps.LatLng;
  public loading;

  constructor(public loadingController: LoadingController,
    public app: App) {
      this.app.setScrollDisabled(true);
     }

  //here create the map on component initialization 
  //center the map to the current location
  ngOnInit() {
    this.map = this.createMap();
    this.getCurrentLocation()
      .subscribe(location => {
        this.centerLocation(location);
      })
  }

  centerLocation(location) {
    if (location) {
      this.map.panTo(location);
    } else {
      this.getCurrentLocation().subscribe(currLocation => {
        this.map.panTo(currLocation);
      })
    }

  }
  getCurrentLocation() {

    let loading = this.loadingController.create({
      content: 'Locating...'
    });
    loading.present();


    let options = { timeout: 10000, enableHighAccuracy: true }

    let locationObs = Observable.create(observable => {
      Geolocation.getCurrentPosition(options)
        .then(resp => {
          let lat = resp.coords.latitude;
          let lng = resp.coords.longitude;
          let location = new google.maps.LatLng(lat, lng);
          observable.next(location);
          loading.dismiss();
        },
        (err) => {
          console.log('GeoLocation err: ' + err);
          loading.dismiss();
        })

    })
    return locationObs;
  }

  createMap(location = new google.maps.LatLng(10, 50)) {
    let mapOptions = {
      center: location,
      fullscreenControl: true,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true
    }
    let mapElement = document.getElementById("map");
    let map = new google.maps.Map(mapElement, mapOptions);
    return map;
  }

  onPickupLocation($event) {
    console.log('Start Location');
    
  }

  onDropLocation($event) {
    console.log('End Location');

    // let geocode = new google.maps.Geocoder;
    // geocode.geocode($event, function (results, status) {
    //   console.log(status);
    //   console.log(results);
    //   console.log(results[0].formatted_address);
    // });
  }
}
