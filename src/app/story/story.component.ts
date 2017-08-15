import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';

import {StoryService} from './story.service'




@Component({
  selector: 'my-app',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit  {
  story : any;
  showLoader = false;


  constructor(
    private StoryService: StoryService,
    private route: ActivatedRoute
  ){}


getStoryDetails(){
  this.showLoader = true;
  this.route
            .paramMap
            .subscribe(p => {
                let storyId = +p.get('storyID');
                let locationUrl = p.get('locationURL');
                this.StoryService
                    .getStory(locationUrl, storyId)
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