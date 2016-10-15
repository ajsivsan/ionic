import { Component } from '@angular/core';
import { NavController, ActionSheetController, AlertController } from 'ionic-angular';

@Component({
  selector: 'action-sheet',
  templateUrl: 'build/components/action-sheet/action-sheet.html'
})
export class ActionSheet {
  public isDriver:boolean;
  constructor(public actionSheetController: ActionSheetController){

  }
  actionSheet(){
    let actionSheet = this.actionSheetController.create({
      title: 'Change User Type',
      buttons:[{
        text: 'Driver',
        handler: () =>{
          this.isDriver = true;
        }
      },
      {
        text: 'Rider',
        handler: () =>{
          this.isDriver = false;
        }
      },{
         text: 'Cancel',
         role: 'cancel',
         handler: () => {
           
         }
       }]
    });
    actionSheet.present();
  }
}
