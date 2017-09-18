import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { UserBlogComponent } from './user-blog.component';
import { UsersService } from  './../services/users.service';
import { PostsService } from  './../services/posts.service';

class MockUserServices {

    user:Array = [{
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {"lat": "-43.9509", "lng": "-34.4618"}
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    }];

    constructor() {
    }

    getUser(userID:number):Observable<Array<any>> {

        return Observable.of(this.user);
    }

}
;

class MockPostsService {

    posts:Array = [{
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
        {
            "userId": 1,
            "id": 2,
            "title": "qui est esse",
            "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        },
        {
            "userId": 1,
            "id": 3,
            "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
            "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
        },
        {
            "userId": 1,
            "id": 4,
            "title": "eum et est occaecati",
            "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
        }];

    constructor() {
    }

    getUserPosts(userID:number) {

        return Observable.of(this.posts);
    }

}

describe('UserBlogComponent', () => {
    let component:UserBlogComponent;
    let fixture:ComponentFixture<UserBlogComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
                declarations: [UserBlogComponent],
                imports: [RouterTestingModule],
                schemas: [NO_ERRORS_SCHEMA],
                providers: [
                    {provide: UsersService, useClass: MockUserServices},
                    {provide: PostsService, useClass: MockPostsService}
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(UserBlogComponent);
        component = fixture.componentInstance;
        component.userID=1;

    });

    it('should create', () => {
        //act
        fixture.detectChanges();
        //assert
        expect(component).toBeTruthy();
    });

    it('should set userPosts property of component', () => {
        //arrange
        let expectedResult:Array = [{
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
            {
                "userId": 1,
                "id": 2,
                "title": "qui est esse",
                "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
            },
            {
                "userId": 1,
                "id": 3,
                "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
                "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
            },
            {
                "userId": 1,
                "id": 4,
                "title": "eum et est occaecati",
                "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
            }]
        //act
        fixture.detectChanges();
        //assert
        expect(component.userPosts).toEqual(expectedResult);
    });
    it('should count the number of userPosts', () => {
        //arrange
        let expectedResult:Array =4
        //act
        fixture.detectChanges();
        //assert
        expect(component.numberOfPosts).toEqual(expectedResult);
    });



    it('should set user property of component', () => {
        //arrange
        let expectedResult:Array =  [{
            "id": 2,
            "name": "Ervin Howell",
            "username": "Antonette",
            "email": "Shanna@melissa.tv",
            "address": {
                "street": "Victor Plains",
                "suite": "Suite 879",
                "city": "Wisokyburgh",
                "zipcode": "90566-7771",
                "geo": {"lat": "-43.9509", "lng": "-34.4618"}
            },
            "phone": "010-692-6593 x09125",
            "website": "anastasia.net",
            "company": {
                "name": "Deckow-Crist",
                "catchPhrase": "Proactive didactic contingency",
                "bs": "synergize scalable supply-chains"
            }
        }];
        //act
        fixture.detectChanges();
        //assert
        expect(component.selectedUser).toEqual(expectedResult);
    });


});
