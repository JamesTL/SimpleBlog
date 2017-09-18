import { Injectable } from '@angular/core';
import  {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class CommentsService {
    apiRoot = 'https://jsonplaceholder.typicode.com/posts/'

    constructor(private http:Http) {
    }

    getCommentForPosts(postID:number):Observable<any> {

        let apiUrl = this.apiRoot + postID + '/comments';
        return this.http.get(apiUrl).map(res=>res.json());

    }

}
