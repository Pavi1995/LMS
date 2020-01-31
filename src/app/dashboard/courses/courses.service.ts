import { Project } from '../../shared/project.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({providedIn: 'root'})
export class CourseService{
    private course: Project[] = [];
    private courseUpdated = new Subject<Project[]>();
    

    constructor(private http: HttpClient, private router: Router) {}

    getCourses(){
        //return [...this.course];
        this.http.get<Project[]>('http://localhost:3000/api/courses')
            .pipe(map(postData => {
                return postData.map(course => {
                    return {
                        projectId: course.projectId,
                        title: course.title,
                        projectDescription: course.projectDescription,
                        assigne: course.assigne,
                        createdOn: course.createdOn,
                        id : course.id 
                    }
                
                }).subscribe(modifiedCourse => {
                    this.course = postData;
                    this.courseUpdated.next([...this.course]);
                });
            }
            ))
    }

    getCourseUpdateListener(){
        return this.courseUpdated.asObservable();
    }

    getCourse(id: string){
        return this.http.get<{
            _id: string,
            projectId: number,
            title: string,
            projectDescription: string,
            assigne: string,
            createdOn: Date,
            }>("http://localhost:3000/api/courses" + id);
        //return {...this.course.find(p => p.id === id)};
    }

    addCourse(projectId: number,
              title: string,
              projectDescription: string,
              assigne: string,
              createdOn: Date,
              id: string
              ){
              const project : Project = {
                  id: id,
                  projectId: projectId,
                  title: title,
                  projectDescription: projectDescription,
                  assigne: assigne,
                  createdOn: createdOn
              };
              this.http.post<{message: string, courseId: string}>('http://localhost:3000/api/courses', project)
              .subscribe((responseData) => {
                const id = responseData.courseId;
                project.id = id;  
                this.course.push(project);  
                this.courseUpdated.next();
                this.router.navigate(["/"]);
                //console.log(responseData.message);
              });
    }


    deleteCourse(courseId: string){
    this.http.delete("http://localhost:3000/api/courses" + courseId)
    .subscribe(() => {
        const deletedCourse = this.course.filter(course => course.id !== courseId);
        this.course = deletedCourse;
        this.courseUpdated.next([...this.course]);
    });
}

    updateCourse(projectId: number,
                title: string,
                projectDescription: string,
                assigne: string,
                createdOn: Date,
                id: string){
                    const project: Project = {
                        projectId: projectId,
                        title: title,
                        projectDescription: projectDescription,
                        assigne: assigne,
                        createdOn: createdOn,
                        id: id
                    };
                    this.http.put("http://localhost:3000/api/courses" + id, project)
                    .subscribe(respone => {
                        const updateCourses = [...this.course];
                        const oldCourseIndex = updateCourses.findIndex(p => p.id === project.id);
                        updateCourses[oldCourseIndex] = project;
                        this.course = updateCourses;
                        this.courseUpdated.next([...this.course]);
                        this.router.navigate(["/"]);
                    });
                }

}
