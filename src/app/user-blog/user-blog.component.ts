import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

import { UsersService } from  './../services/users.service';
import { PostsService } from  './../services/posts.service';


@Component({
    selector: 'app-user-blog',
    templateUrl: './user-blog.component.html',
    styleUrls: ['./user-blog.component.scss']
})
export class UserBlogComponent implements OnInit {

    userID:number;
    name:string;
    username:string;
    errorMessage:string;
    selectedUser:Object;
    userPosts:Object[];
    numberOfPosts:number;

    constructor(private route:ActivatedRoute,
                private userService:UsersService,
                private postsService:PostsService) {
    }

    ngOnInit() {

        this.route.params.forEach((params:Params) => {
            this.userID = params['id'];
        });

        // get user
        this.userService.getUser(this.userID).subscribe(user=> {
            this.selectedUser = user;
            this.name = user['name'];
            this.username = user['username'];


        })
        // get posts
        this.postsService.getUserPosts(this.userID).subscribe((data)=> {

                this.userPosts = data;
                this.numberOfPosts = data.length

            },
            (err)=> {
                this.errorMessage = err;
                console.log(this.errorMessage);
            });
    }
}
