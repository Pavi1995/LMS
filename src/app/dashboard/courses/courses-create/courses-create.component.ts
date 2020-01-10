import { Component, OnInit, EventEmitter, Output } from "@angular/core";

import { Project } from "../../../shared/project.model";
import { Dashboard } from "../../../shared/dashboard.model"
import { NgForm } from '@angular/forms';
import { CourseService } from '../courses.service';

@Component({
    selector: 'courses-create',
    templateUrl: './courses-create.component.html',
    styleUrls: ['./courses-create.component.css']
})

export class CoursesCreateComponent implements OnInit{
    projectId = 0;
    title = ""; 
    projectDescription = "";
    assigne = "";
    createdOn = new Date();
    //@Output() courseCreated = new EventEmitter<Project>();

    onAddCourse(form: NgForm) {
        if(form.invalid){
            return;
        }
        /*const course: Project = {
            projectId: form.value.projectId,
            title: form.value.title,
            projectDescription: form.value.projectDescription,
            assigne: form.value.assigne,
            createdOn: form.value.createdOn 
        };*/
        //this.courseCreated.emit(course);
        this.courseService.addCourse(
            form.value.projectId,
            form.value.title,
            form.value.projectDescription,
            form.value.assigne,
            form.value.createdOn
            );
        form.resetForm();    
    }
    constructor(public courseService: CourseService) {}
    ngOnInit(){}
}