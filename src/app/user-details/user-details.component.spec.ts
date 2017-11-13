import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {NO_ERRORS_SCHEMA } from '@angular/core';

import { UserDetailsComponent } from './user-details.component';

describe('UserDetailsComponent', () => {
    let component:UserDetailsComponent;
    let fixture:ComponentFixture<UserDetailsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
                declarations: [UserDetailsComponent],
                imports: [RouterTestingModule],
                schemas: [NO_ERRORS_SCHEMA],
            })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UserDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
