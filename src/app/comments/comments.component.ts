import { Component, OnInit, Input } from '@angular/core';

import {CommentsService} from './../services/comments.service'

@Component({
    selector: 'app-comments',
    templateUrl: './comments.component.html',
    styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

    comments:Object[];
    numberOfComments:number;
    errorMessage:string;
    @Input() currentPostID:number;

    constructor(private commentService:CommentsService) {
    }

    ngOnInit() {

        this.commentService.getCommentForPosts(this.currentPostID).subscribe(data=> {
                this.comments = data;
                this.numberOfComments = data.length;
            },
            err=> {
                this.errorMessage=err;
                console.log(this.errorMessage);//get the error in error handler
            });
    }
}
