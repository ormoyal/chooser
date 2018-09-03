import {Component} from '@angular/core';
import { CoursesService } from './course/courses.service';

@Component({
    selector: 'courses',
    template: `<h2 id="123">ourCourses</h2>
                <ul *ngFor="let course of courses">
                    <li>{{course}}</li>
                </ul>
                <button class="btn btn-primary" [class.active]="active">Save</button>
                <button [style.backgroundColor]="active ? 'green' : 'red' ">Save</button>
                
                `

})

export class CoursesComponent{
    courses;
    active = true;
    constructor(service: CoursesService){
        this.courses = service.getCourses();
    }
}