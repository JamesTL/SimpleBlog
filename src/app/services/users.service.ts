import { Injectable } from '@angular/core';
import  {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';



@Injectable()
export class UsersService {

    apiRoot:string = 'https://jsonplaceholder.typicode.com/users';

    constructor(private http:Http) {}


    //retrieve all users
    getAllUsers():Observable<Array<any>>{
        let apiUrl = `${this.apiRoot}`;
        return this.http.get(apiUrl).map(res=>res.json());

    }

    //retrieve a single user by user id
    getUser(userID:number):Observable<Array<any>>{

        let apiUrl = this.apiRoot+'/'+userID;
        return this.http.get(apiUrl).map(res=>res.json());
    }

}
