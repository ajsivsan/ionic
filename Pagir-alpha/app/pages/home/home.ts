import { Component, OnInit } from '@angular/core';
import { NavController, ActionSheetController, LoadingController, App } from 'ionic-angular';
import { MapComponent } from '../../components/map/map';

@Component({
  templateUrl: 'build/pages/home/home.html',
  directives:[MapComponent]
})
export class HomePage implements OnInit{
  constructor(
    public navCtrl: NavController,
    public loadingController: LoadingController,
    public app: App) {
      this.app.setScrollDisabled(true);
  }
  ngOnInit(){
    // let loader = this.loadingController.create({
    //   content: "Loading..",
    //   duration: 5000
    // });
    // loader.present();
  }
}
