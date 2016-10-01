import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'build/pages/login/login.html',
})
export class LoginPage {

  constructor(
    private navCtrl: NavController,
    private app: App) 
    {
      this.app.setScrollDisabled(true);
    }
    navigateRegister(){
      this.navCtrl.popToRoot();
    }
    navigateHome(){
      this.navCtrl.setRoot(HomePage);
    }
}
