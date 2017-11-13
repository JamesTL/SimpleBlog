import { Component, OnInit, Input } from '@angular/core';
import {} from './../user-posts/user-posts'

@Component({
    selector: 'app-user-posts',
    templateUrl: './user-posts.component.html',
    styleUrls: ['./user-posts.component.scss']
})
export class UserPostsComponent implements OnInit {

    post:Object;
    @Input() currentPost:Object;

    constructor() {
    }

    ngOnInit() {
        console.log(';;;;;;;;;;;');
        console.log(this.currentPost);

        this.post = this.currentPost;
    }

}
