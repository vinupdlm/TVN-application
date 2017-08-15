import { Component, OnInit } from '@angular/core';


import { VadakaraHomeService } from './vadakara.service';




@Component({
  selector: 'my-app',
  templateUrl: './vadakara.component.html',
  styleUrls: ['./vadakara.component.css']
})
export class VadakaraComponent implements OnInit { 

  homefeed: any;
  showLoader = false;
  locationURL = 'http://vatakara.truevisionnews.com/wp-json/wp/v2/posts'; 

  constructor( private VadakaraHomeService: VadakaraHomeService ) {  }


//   getList(){
//   this.TodoService
//       .getTodos()
//       .then((todos) => {
//         this.todos = todos
//         console.log(todos)
//       });
// }



getHomeFeeds(){
  this.showLoader = true;
  this.VadakaraHomeService
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

