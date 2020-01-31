import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Subject, VirtualTimeScheduler } from "rxjs";
import { map } from 'rxjs/operators';
import { Dashboard } from '../shared/dashboard.model';
import { AuthService } from '../auth/auth.service';
import { Login } from '../shared/login.model';

@Injectable({providedIn: 'root'})
export class DashboardService{
    private dashboard: Dashboard[] = [];
    private dashboardUpdated = new Subject<Dashboard[]>();
    //private authService = new Subject<AuthService[]>();
    private user; 

    constructor(private http: HttpClient,private authservice: AuthService) {}

    getDashboard(){
        this.http.get<Dashboard[]>('http://localhost:3000/api/dashboard')
        .pipe(map(postData => {
            this.user = this.authservice.getAuthData().userId;
            return postData.map(dashboard => {
                if(this.user === dashboard.firstname){
                    return {
                       firstname: dashboard.firstname,
                       lastname: dashboard.lastname,
                       address: dashboard.address,
                       dateOfBirth: dashboard.dateOfBirth,
                       gender: dashboard.gender,
                       description: dashboard.description,
                       qualifictaion: dashboard.qualification,
                       skills: dashboard.skills,
                       yearsOfExperience: dashboard.yearsofExperience,
                       currentSalary: dashboard.currentSalary,
                       employmentType: dashboard.employementType,
                       company: dashboard.company,
                       role: dashboard.role     
                    }
                }
                else {
                    return console.log(`Invalid Dashboard details!!!`);
                }
            }).subscribe(dashboardUpdated => {
                this.dashboard = postData;
                this.dashboardUpdated.next([...this.dashboard]);
            });           
        )
        })
    }

    addDashboard(){}

}

