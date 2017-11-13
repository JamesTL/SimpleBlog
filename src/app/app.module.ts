import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router'
import { routing,
    appRoutingProviders }  from './routes';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserBlogComponent } from './user-blog/user-blog.component';
import { UsersService} from './services/users.service';
import { PostsService} from './services/posts.service';
import {CommentsService} from './services/comments.service';
import { CommentsComponent } from './comments/comments.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserPostsComponent } from './user-posts/user-posts.component';


@NgModule({
    declarations: [
        AppComponent,
        UserListComponent,
        UserBlogComponent,
        CommentsComponent,
        UserDetailsComponent,
        UserPostsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
        RouterModule
    ],
    providers: [
        appRoutingProviders,
        UsersService,
        PostsService,
        CommentsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
