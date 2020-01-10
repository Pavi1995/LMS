import { Component, OnInit, Input, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";

import { Project } from "../../../shared/project.model";
import { CourseService } from "../courses.service";

@Component({
    selector: 'courses-list',
    templateUrl: './courses-list.component.html' 
})

export class CoursesListComponent implements OnInit, OnDestroy {
     
    courses: Project[] = [];
    private projectSub: Subscription;

    constructor(public courseService: CourseService){}
     ngOnInit(){
         this.courseService.getCourses();
         this.projectSub = this.courseService.getCourseUpdateListener()
            .subscribe((courses: Project[]) => {
                this.courses = courses;
            });   
     }

     ngOnDestroy(){
         this.projectSub.unsubscribe();
     }

}