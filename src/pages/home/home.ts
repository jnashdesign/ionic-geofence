import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { GeofenceService } from '../../geofence-module/providers/geofence-service';
import { MapPage } from '../map/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public fences:any;

  constructor(public navCtrl: NavController, private geofenceService:GeofenceService) {
    console.log('HomePage Hello World');
  }

  ngOnInit(){

    console.log('PageHome ngOnInit()');

    this.fences = this.geofenceService.getAll();
    
  }

  go(fenceId){
    console.log('GOING TO MAP...');
    let ids:Array<number>=[];
    ids.push(fenceId);
    this.navCtrl.push(MapPage, { 'fenceIds' : ids });
  }

  showAll(){
    let ids:Array<number>=[];
    this.fences.data.forEach( fence => {
      ids.push(fence.geofence.id);
    })
    console.log(ids);
    this.navCtrl.push(MapPage, { 'fenceIds' : ids });
  }

}
