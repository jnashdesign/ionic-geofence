import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Geolocation, GeolocationOptions } from '@ionic-native/geolocation';

@Injectable()

/**
 * Service to get the current users geolocation
 */
export class GeolocationService {

  //private defaultOptions:<GeolocationOptions> = {maximumAge : 0, }

  private defaultOptions = {
    maximumAge: 0,
    timeout: 2000,
    enableHighAccuracy: true
  }

  private watchedPosition:BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(private geolocation: Geolocation) {  
      this.setSubscription();
  }

  /**
   *   get the current position
   *   @Returns {Promise<Geoposition>}
   */
  public getCurrentPosition(options?:GeolocationOptions){
    options = options ? options : this.defaultOptions;
    return this.geolocation.getCurrentPosition();
  }

  public watchPosition():Observable<any>{
    console.log('Someone subscribed to position...');
    return this.watchedPosition.asObservable();
  }

  private setSubscription(){
    this.geolocation.watchPosition(this.defaultOptions).subscribe( (position) => {
        console.log(position);
        if(position && position.coords){
          console.log(position.coords.longitude + ' ' + position.coords.latitude);
          this.watchedPosition.next(position);
        }else{
          //response was not a Position Object
          this.watchedPosition.next(null);
        }
    }, (err) => {
        //Handle the error
        console.log('watchPosition ERROR');
    }, () => {
        //Subscription has completed
    });
  }

}
