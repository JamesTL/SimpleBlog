import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';


@Injectable()
export class PostsService {

    apiRoot = 'https://jsonplaceholder.typicode.com/posts?userId='

    constructor(private http:Http) {}


    getUserPosts(userID:number):Observable<Array<any>> {

        let apiUrl = this.apiRoot + userID;

        return this.http.get(apiUrl).map((res)=>res.json());

    }

}
