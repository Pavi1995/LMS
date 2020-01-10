import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'dashboard-list',
    templateUrl: './dashboard-list.component.html',
    styleUrls: ['./dashboard-list.component.css']
})

export class DashboardListComponent implements OnInit{

    dashboard = [{
       firstname: "",
       lastname: "",
       address: "",
       dateOfBirth: "",
       gender: "",
       description: "",
       qualification: "",
       skills: "",
       yearsofExperience: "",
       currentSalary : "",
       employementType: "",
       company: "",
       role: ""
    }];
    constructor() {}
    ngOnInit(){}
}