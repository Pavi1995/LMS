import { Project } from '../../shared/project.model'
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class CourseService{
    private course: Project[] = [];
    private courseUpdated = new Subject<Project[]>();

    constructor(private http: HttpClient) {}

    getCourses(){
        //return [...this.course];
        this.http.get<Project[]>('http://localhost:3000/api/courses')
            .subscribe((postData) => {
                this.course = postData.course;
                this.courseUpdated.next([...this.course]);
            });
    }

    getCourseUpdateListener(){
        return this.courseUpdated.asObservable();
    }

    addCourse(projectId: number,
              title: string,
              projectDescription: string,
              assigne: string,
              createdOn: Date
              ){
              const project : Project = {
                  projectId: projectId,
                  title: title,
                  projectDescription: projectDescription,
                  assigne: assigne,
                  createdOn: createdOn
              };
              this.http.post<{message: string}>('http://localhost:3000/api/courses', project)
              .subscribe((responseData) => {
                console.log(responseData.message);
              });
              this.course.push(project);  
              this.courseUpdated.next();
    }
}