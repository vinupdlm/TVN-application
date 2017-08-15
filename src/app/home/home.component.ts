import { Component, OnInit } from '@angular/core';


import { HomeService } from './home.service';




@Component({
  selector: 'my-app',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit { 

  homefeed: any;
  showLoader = false;

  constructor( private HomeService: HomeService ) {  }


//   getList(){
//   this.TodoService
//       .getTodos()
//       .then((todos) => {
//         this.todos = todos
//         console.log(todos)
//       });
// }



// getHomeFeeds(){
//   this.showLoader = true;
//   this.HomeService
//   .getFeeds()
//   .subscribe(data => {
//     this.homefeed = data;
//     console.log(this.homefeed);
//     this.showLoader = false;
//   });
// }



  ngOnInit(){
    //this.getHomeFeeds()
  }

}

