import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

   user;
   @Input() currentUser;
   constructor() { }

  ngOnInit() {
    console.log(this.currentUser);
    this.user = this.currentUser;

  }

}
