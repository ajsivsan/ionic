import { Component, Input, OnChanges, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'pickup',
  templateUrl: 'build/components/pickup/pickup.html'
})
export class Pickup implements OnChanges {
  @Input() public isStartSet: boolean;
  @Input() map: google.maps.Map;
  @Output() pickupLoc = new EventEmitter();

  public pickupMarker: google.maps.Marker;

  constructor() {

  }

  ngOnChanges() {
    if (this.isStartSet) {
      this.showPickupMarker();
    } else {
      this.removePickupMarker();
    }
  }

  showPickupMarker() {
    this.pickupLoc.emit({'location': this.map.getCenter()});
    this.pickupMarker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.BOUNCE,
      position: this.map.getCenter(),
      icon: 'img/mark.png'
    });
    setTimeout(() => {
      this.pickupMarker.setAnimation(null);
    }, 750);
  }

  removePickupMarker() {
    if (this.pickupMarker) {
      this.pickupMarker.setMap(null);
    }
  }
}
