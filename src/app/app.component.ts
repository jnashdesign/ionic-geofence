import { Component } from '@angular/core';
import { Platform , ToastController} from 'ionic-angular';

import { HomePage } from '../pages/home/home';

import { GeofenceService } from '../geofence-module/providers/geofence-service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(private toastCtrl:ToastController, platform: Platform, geofenceService: GeofenceService) {
    platform.ready().then(() => {
      
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      console.log('PLATFORM IS READY');

      geofenceService.init().then(
        () => {
          console.log('GEOFENCE SERVICE INITIALIZED');
          geofenceService.addAll().then(
            () => console.log("added all fences..."),
            (err) => "An error was encountered when adding fences..."
          );
          geofenceService.getTransitions().subscribe((transition) => {
            console.log('TRANSITION DETECTED: ', JSON.stringify(transition));
            if(transition != null) {

              // HANDLE THE TRANSITION  -- here we're just going to display a toast... //

              this.presentToast(transition[0].transitionType, transition[0]);

            }
          });
        },
        (err) => console.log('GEOFENCE SERVICE ERROR: ', err)
      )

    });

  }

  private presentToast(transitionType, transition){
   
    let strings:any = [
      null, 'ENTERED', 'EXITED', ''
    ]

    console.log("PRESENTING TOAST...", strings[transitionType]);

    let cssClassStr = transitionType == 1 ? "transition-enter" : "transition-exit"

    let toast = this.toastCtrl.create({
      message : strings[transitionType] + ' - ID: ' + transition.id,
      duration: 5000,
      showCloseButton: true,
      closeButtonText: 'X',
      cssClass: cssClassStr
    })
    toast.present();
  }
  
}
