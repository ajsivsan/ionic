import { Component, OnInit} from '@angular/core';
import {  LoadingController } from 'ionic-angular';
import { Geolocation } from 'ionic-native';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the Map component.

  See https://angular.io/docs/ts/latest/api/core/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'map',
  templateUrl: 'build/components/map/map.html'
})
export class MapComponent implements OnInit {

  public map: google.maps.Map;
  public currentLocation: google.maps.LatLng;
  public loading;
  constructor(public loadingController: LoadingController) {
    this.loading = this.loadingController.create({
      content: 'Locating you..'
    });
  }
  ngOnInit() {
    this.map = this.createMap();
    this.watchCurrentLocation().subscribe(position => {
      let location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      this.centerMap(location);
    });
  }

  centerMap(location) {
    if (location) {
      this.map.panTo(location);
    } else {
      this.watchCurrentLocation().subscribe(loc => {
        this.map.panTo(new google.maps.LatLng(loc.coords.latitude, loc.coords.longitude));
      })
    }
    this.loading.dismiss();
  }


  watchCurrentLocation() {
    this.loading.present();
    var geoSubscription = Geolocation.watchPosition();
    return geoSubscription;
  }
  createMap(location = new google.maps.LatLng(10, 50)) {
    let mapOptions = {
      center: location,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true
    }
    let mapElement = document.getElementById("map");
    let map = new google.maps.Map(mapElement, mapOptions);
    return map;
  }
}
