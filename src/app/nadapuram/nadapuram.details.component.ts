import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';

import {NadapuramHomeService} from './nadapuram.service'




@Component({
  selector: 'my-app',
  templateUrl: './nadapuram.details.component.html',
  styleUrls: ['./nadapuram.details.component.css']
})
export class NadapuramDetailsComponent implements OnInit  {
  story : any;
  showLoader = false;


  constructor(
    private StoryService: NadapuramHomeService,
    private route: ActivatedRoute
  ){}


getStoryDetails(){
  this.showLoader = true;
  this.route
            .paramMap
            .subscribe(p => {
                let storyId = +p.get('storyID');
                this.StoryService
                    .getStory(storyId)
                    .subscribe(data => {
                      this.story = data;
                      console.log(this.story);
                      this.showLoader = false;
                    });
            });
}


  ngOnInit() {
    this.getStoryDetails()
    
  }
 }