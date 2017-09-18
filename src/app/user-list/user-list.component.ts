import { Component, OnInit } from '@angular/core';
import { UsersService} from './../services/users.service'

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

    users:any;
    numberOfUsers:number;
    errorMessage:string;

    constructor(private usersServices:UsersService) {
    }

    ngOnInit() {

        this.usersServices.getAllUsers().subscribe((data)=> {
                this.users = data;
                this.numberOfUsers = data.length;
            },
            err=> {
                this.errorMessage = err;
                console.log(this.errorMessage);
            });
    }
}

