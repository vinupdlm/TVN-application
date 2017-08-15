import { Injectable } from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
//import 'rxjs/add/operator/toPromise';
import {Subject} from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class VadakaraHomeService {
    private url = 'http://vatakara.truevisionnews.com/wp-json/wp/v2/posts';
    private headers = new Headers({'Content-Type': 'application/json'});
    constructor (private http : Http){

    }

    // getFeeds(){
    //     return this.http
    //     .get(this.url)
    //     //.then( (res) => res.json);
    //     .map((res: Response) => res.json());
    // }

    getFeeds(){
        return this.http
        .get(this.url)
        .map((res: Response) => res.json());
    }

    getStory(id: number) {
        return this.http
            .get(`${this.url}/${id}`)
            .map((res: Response) => res.json());
    }


}