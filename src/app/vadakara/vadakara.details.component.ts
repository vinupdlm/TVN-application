import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';

import {VadakaraHomeService} from './vadakara.service'




@Component({
  selector: 'my-app',
  templateUrl: './vadakara.details.component.html',
  styleUrls: ['./vadakara.details.component.css']
})
export class VadakaraDetailsComponent implements OnInit  {
  story : any;
  showLoader = false;


  constructor(
    private StoryService: VadakaraHomeService,
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