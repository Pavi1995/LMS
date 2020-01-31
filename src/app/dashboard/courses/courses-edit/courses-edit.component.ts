import { Component, OnInit } from "@angular/core";
import { Subscription } from 'rxjs';

import { Project } from "../../../shared/project.model";
import { CourseService } from "../courses.service";

@Component({
    selector: 'courses-edit',
    templateUrl: './courses-edit.component.html' 
})

export class CoursesEditComponent implements OnInit {
     

    courses = [];
    constructor(public courseservice: CourseService){}
     ngOnInit(){}

     onDelete(courseId: string){
        this.courseservice.deleteCourse(courseId);
     }
}