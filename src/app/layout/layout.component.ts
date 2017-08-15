import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { Title }     from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'my-app',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})


export class LayoutComponent implements OnInit  {

routeType: string;


  constructor(
    private router: Router, 
    private _location: Location,
    private activeRoute: ActivatedRoute,
  ){
    this.title = this.router.events
      .filter((event) => event instanceof NavigationEnd)
      .map(() => this.getDeepestTitle(this.router.routerState.snapshot.root));

      //this.routeType = activeRoute.snapshot.data[0]['type'];

      console.log(activeRoute.snapshot.data)
  }

  title: Observable<string>;
  

  private getDeepestTitle(routeSnapshot: ActivatedRouteSnapshot) {
    var title = routeSnapshot.data ? routeSnapshot.data['title'] : '';
    if (routeSnapshot.firstChild) {
      title = this.getDeepestTitle(routeSnapshot.firstChild) || title;
    }
    return title;
  }


    goToBack() {
        this._location.back();
    }

    ngOnInit() {
    
 
    }

  
}

