import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserListComponent} from './user-list/user-list.component';
import {  UserBlogComponent } from  './user-blog/user-blog.component';

const appRoutes:Routes = [
    {path: '', component: UserListComponent},
    {path: 'user/:id', component: UserBlogComponent},
    {path: '**', component: UserListComponent}
];

export const appRoutingProviders:any[] = [];

export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);

