import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { GeofenceService } from '../../geofence-module/providers/geofence-service'

/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  mapPoints:Array<any> = [];
  apiKey:string = "AIzaSyAr8gPCs8QZg0n5eFnVL4Gp8yKTjOWeoUA";

  constructor(public navCtrl: NavController, public navParams: NavParams, private geofenceService: GeofenceService) {
    console.log(navParams.get('fenceId'));
    let ids:Array<any> = this.navParams.get('fenceIds');
    ids.forEach( id => {
      this.mapPoints.push(this.geofenceService.get(id));
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
  }

}
