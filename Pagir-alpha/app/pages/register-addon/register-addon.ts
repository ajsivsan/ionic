import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'build/pages/register-addon/register-addon.html',
})
export class RegisterAddonPage {

  constructor(private navCtrl: NavController) {

  }
  navigateLogin(){
    this.navCtrl.push(LoginPage);
  }
  navigateHome(){
    this.navCtrl.setRoot(HomePage);
  }

}
