import { Injectable } from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {Subject} from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class StoryService {
    private url = 'http://vatakara.truevisionnews.com/wp-json/wp/v2/posts';
    private headers = new Headers({'Content-Type': 'application/json'});
    constructor (private http : Http){

    }

    // getStory(id: number) {
    //     return this.http
    //         .get(`${this.url}/${id}`)
    //         .map((res: Response) => res.json());
    // }

    getStory(url: string, id: number) {
        return this.http
            .get(`${url}/${id}`)
            .map((res: Response) => res.json());
    }


}