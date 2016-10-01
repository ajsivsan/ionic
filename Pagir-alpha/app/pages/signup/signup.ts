import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import {RegisterAddonPage } from '../register-addon/register-addon';
import { LoginPage } from '../login/login';

@Component({
  templateUrl: 'build/pages/signup/signup.html',
})
export class SignupPage {

  constructor(private navCtrl: NavController, private app: App) {
    this.app.setScrollDisabled(true);
  }
  nextPage(){
    this.navCtrl.push(RegisterAddonPage);
  }
  navigateLogin(){
    this.navCtrl.push(LoginPage)
  }

}
