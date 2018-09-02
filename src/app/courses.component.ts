import {Component} from '@angular/core';

@Component({
    selector: 'courses',
    template: `<h2>ourCourses</h2>
                <ul *ngFor="let course of courses">
                    <li>{{course}}</li>
                </ul>`
})

export class CoursesComponent{
    courses;
}