import {Dashboard} from './dashboard.model';

export class Project{
    constructor(
        public projectId : number,
        public title: string,
        public projectDescription: string,
        public assigne: string,
        public createdOn: Date
    ){}
    
}