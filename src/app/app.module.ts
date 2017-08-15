import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';





import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { HomeService } from './home/home.service';
//--------------------------------------------------------------------------------
import { VadakaraComponent } from './vadakara/vadakara.component';
import { VadakaraDetailsComponent } from './vadakara/vadakara.details.component';
import { VadakaraHomeService } from './vadakara/vadakara.service';

import { NadapuramComponent } from './nadapuram/nadapuram.component';
import { NadapuramDetailsComponent } from './nadapuram/nadapuram.details.component';
import { NadapuramHomeService } from './nadapuram/nadapuram.service';


//--------------------------------------------------------------------------------



const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Top Stories' }
  },
  {
    path: 'vadakara',
    component: VadakaraComponent,
    data: { title: 'Vadakara' }
  },
  {
    path: 'vadakara/story/:storyID',
    component: VadakaraDetailsComponent,
    data: { title: 'Story Name' }
  },
  {
    path: 'nadapuram',
    component: NadapuramComponent,
    data: { title: 'Nadapuram' }
  },
  {
    path: 'nadapuram/story/:storyID',
    component: NadapuramDetailsComponent,
    data: { title: 'Story Name' }
  }
  // { path: '**', component: PageNotFoundComponent }
];




@NgModule({
  declarations: [
    LayoutComponent,
    HomeComponent,
    VadakaraComponent,
    NadapuramComponent,
    VadakaraDetailsComponent,
    NadapuramDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes//,
      //{ enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [HomeService, VadakaraHomeService, NadapuramHomeService],
  bootstrap: [LayoutComponent]
})
export class AppModule { }