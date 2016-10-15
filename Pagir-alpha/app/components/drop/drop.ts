import { Component, Input, OnChanges, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'drop',
  templateUrl: 'build/components/drop/drop.html'
})
export class Drop implements OnChanges {
  @Input() public isDropSet: boolean;
  @Input() map: google.maps.Map;
  @Output() dropLocation = new EventEmitter();
  public dropMarker: google.maps.Marker;

  constructor() {

  }
  ngOnChanges() {
    if (this.isDropSet) {
      this.showDropMarker();
    } else {
      this.removeDropMarker();
    }
  }
  showDropMarker() {
    //emit the locaiton as an object which reverse geocoder can understand.
      this.dropLocation.emit({'location' : this.map.getCenter()});
      this.dropMarker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.BOUNCE,
      position: this.map.getCenter(),
      icon: 'img/mark.png'
    });
    setTimeout(() => {
      this.dropMarker.setAnimation(null);
    }, 750);
  }
  removeDropMarker() {
    if (this.dropMarker) {
      this.dropMarker.setMap(null);
    }
  }
}
