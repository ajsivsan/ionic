import { Component } from '@angular/core';
import { NavController, ActionSheetController, AlertController } from 'ionic-angular';
/*
  This component will be used to set the payment type for the applicaiton
  The accepted payment types are 
  - Cash
  - Credit Card
  - Pagir Account
*/
@Component({
  selector: 'action-sheet',
  templateUrl: 'build/components/action-sheet/action-sheet.html'
})
export class ActionSheet {

  constructor(public actionSheetController: ActionSheetController){

  }
  actionSheet(){

    let actionSheet = this.actionSheetController.create({
      title: 'Select Payment option',
      buttons:[{
        text: 'Credit Card',
        handler: () =>{
          console.log('Add')
        }
      },
      {
        text: 'Cash',
        handler: () =>{
          console.log('Updated')
        }
      },
      {
        text: 'Pagir Balance',
        handler: () =>{
          console.log('Deleted')
        }
      }]
    });
    actionSheet.present();
  }
}
