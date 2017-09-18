import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { CommentsComponent } from './comments.component';
import {CommentsService} from './../services/comments.service'


// stub UserService for test purposes
class MockCommentsService {

    constructor() {
    }

    testComments:Array =
        [
            {
                "postId": 1,
                "id": 1,
                "name": "id labore ex et quam laborum",
                "email": "Eliseo@gardner.biz",
                "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
            },
            {
                "postId": 1,
                "id": 2,
                "name": "quo vero reiciendis velit similique earum",
                "email": "Jayne_Kuhic@sydney.com",
                "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
            },
            {
                "postId": 1,
                "id": 3,
                "name": "odio adipisci rerum aut animi",
                "email": "Nikita@garfield.biz",
                "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
            }
        ];

    public getCommentForPosts(postID:number):Observable {

        if (postID) {
            return Observable.of(this.testComments);
        } else {
            return Observable.of([{}])
        }

    }
}

describe('CommentsComponent', () => {
    let component:CommentsComponent;
    let fixture:ComponentFixture<CommentsComponent>;

    beforeEach(async(() => {

        TestBed.configureTestingModule({
                declarations: [CommentsComponent],
                imports: [RouterTestingModule],
                providers: [{provide: CommentsService, useClass: MockCommentsService}],
                schemas: [NO_ERRORS_SCHEMA]
            })
            .compileComponents();

        fixture = TestBed.createComponent(CommentsComponent);
        component = fixture.componentInstance;
        component.currentPostID = 1;

    });

    it('should create', () => {
        //action
        fixture.detectChanges();
        //assert
        expect(component).toBeTruthy();
    });

    it('should set comments property of component', ()=> {
        //arrange
        let expectedResult:Array =
            [
                {
                    "postId": 1,
                    "id": 1,
                    "name": "id labore ex et quam laborum",
                    "email": "Eliseo@gardner.biz",
                    "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
                },
                {
                    "postId": 1,
                    "id": 2,
                    "name": "quo vero reiciendis velit similique earum",
                    "email": "Jayne_Kuhic@sydney.com",
                    "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
                },
                {
                    "postId": 1,
                    "id": 3,
                    "name": "odio adipisci rerum aut animi",
                    "email": "Nikita@garfield.biz",
                    "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
                }
            ];
        //action
        fixture.detectChanges();

        //assert
        expect(component.comments).toEqual(expectedResult)
    })

    it('should calculate number of comments returned', ()=> {
        //arrange
        let expectedResult:number = 3;
        //action
        fixture.detectChanges();
        //assert
        expect(component.numberOfComments).toBe(expectedResult);
    })

  });
