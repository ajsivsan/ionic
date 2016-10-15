import { Component, OnInit } from '@angular/core';
import { NavController, ActionSheetController, LoadingController, App } from 'ionic-angular';
import { MapComponent } from '../../components/map/map';
import { ActionSheet } from '../../components/action-sheet/action-sheet';

@Component({
  templateUrl: 'build/pages/home/home.html',
  directives:[MapComponent, ActionSheet]
})
export class HomePage implements OnInit{
  public isStartMarked : boolean;
  public isEndMarked : boolean;
  public pickupAddress: string;
  public dropAddress: string;
  public pages = ['page1','page2'];
  constructor(
    public navCtrl: NavController,
    public loadingController: LoadingController,
    public app: App) {
      this.app.setScrollDisabled(true);
  }
  ngOnInit(){
  }
  markStart(){
    this.isStartMarked = true;
  }
  markEnd(){
    this.isEndMarked = true;
  }
}
