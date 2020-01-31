import { Component, OnInit, EventEmitter, Output } from "@angular/core";

import { Project } from "../../../shared/project.model";
import { Dashboard } from "../../../shared/dashboard.model"
import { NgForm, FormGroup, Validators, FormControl } from '@angular/forms';
import { CourseService } from '../courses.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

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
    private mode = 'create';
    private postId : string;
    project : Project;
    form: FormGroup;
    imagePreview : string;
    isLoading = false;
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
            form.value.createdOn,
            form.value.id
            );
        form.resetForm();    
    }
    constructor(public courseService: CourseService, public route : ActivatedRoute) {}
    ngOnInit(){
        this.form = new FormGroup({
            projectId : new FormControl(null, {
                validators: [Validators.required, Validators.minLength(5)]
            }),
            title : new FormControl(null, {
                validators: [Validators.required]
            }),
            projectDescription : new FormControl(null, {
                validators: [Validators.required]
            }),
            assigne : new FormControl(null, {
                validators: [Validators.required]
            }),
            createdOn : new FormControl(null, {
                validators: [Validators.required]
            }),
            id : new FormControl(null, {
                validators: [Validators.required]
            }),
            image : new FormControl(null)
        });
        this.route.paramMap.subscribe((paramMap: ParamMap) => {
            if(paramMap.has('postId')){
                this.mode = 'edit';
                this.postId = paramMap.get('postId');
                this.isLoading = true;
                this.courseService.getCourse(this.postId).subscribe(
                    postData => {
                        this.isLoading = false;
                        this.project = {
                            id: postData._id,
                            projectId: postData.projectId,
                            title: postData.title,
                            projectDescription: postData.projectDescription,
                            assigne: postData.assigne,
                            createdOn: postData.createdOn   
                        };
                        this.form.setValue({
                            id : this.project.id,
                            projectId : this.project.projectId,
                            title : this.project.title,
                            projectDescription : this.project.projectDescription,
                            assigne : this.project.assigne,
                            createdOn : this.project.createdOn
                        });
                    }
                ); 
            } else{
                this.mode = 'create';
                this.postId = null;
            }           
        });      
    }

    onImagePicked(event: Event){
        const file = (event.target as HTMLInputElement).files[0];
        this.form.patchValue({image : file});
        this.form.get('image').updateValueAndValidity();
        console.log(file);
        console.log(this.form);
        const reader = new FileReader();
        reader.onload = () => {
            this.imagePreview = reader.result;
        };
        reader.readAsDataURL(file);
    }

    onSavePost(form: NgForm){
        if(this.form.invalid){
            return;
        }
        this.isLoading = true;
        if(this.mode === 'create'){
            this.courseService.addCourse(
                this.form.value.projectId,
                this.form.value.title,
                this.form.value.projectDescription,
                this.form.value.assigne,
                this.form.value.createdOn,
                this.form.value.id)
        } else {
            this.courseService.updateCourse(
                this.form.value.projectId,
                this.form.value.title,
                this.form.value.projectDescription,
                this.form.value.assigne,
                this.form.value.createdOn,
                this.postId);
        }
        this.form.reset();
    }
}