import { Component, OnInit } from '@angular/core';


import { NadapuramHomeService } from './nadapuram.service';




@Component({
  selector: 'my-app',
  templateUrl: './nadapuram.component.html',
  styleUrls: ['./nadapuram.component.css']
})
export class NadapuramComponent implements OnInit { 

  homefeed: any;
  showLoader = false;

  constructor( private NadapuramHomeService: NadapuramHomeService ) {  }


getHomeFeeds(){
  this.showLoader = true;
  this.NadapuramHomeService
  .getFeeds()
  .subscribe(data => {
    this.homefeed = data;
    console.log(this.homefeed);
    this.showLoader = false;
  });
}



  ngOnInit(){
    this.getHomeFeeds()
  }

}

