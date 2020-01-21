import {Component, EventEmitter, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  outputs:['sideNavActions']
})
export class NavigationComponent implements OnInit {
  sidenavActions: EventEmitter<any> = new EventEmitter<any>();
  sidenavParams = [];
  //
  home: string = '/';
  route: string;

  constructor(routes: Router , location: Location) {
    routes.events.subscribe((val)=>{
      if(location.path() != ''){
        this.route = location.path();
      }
      else{
        this.route = this.home;
      }
    })
  }

  ngOnInit() {
  }

  closeSideNav() {
    console.log("App sideNav closing...");
  }

}
