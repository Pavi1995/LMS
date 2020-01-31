import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesEditComponent } from './courses-edit/courses-edit.component';
import { CoursesCreateComponent } from './courses-create/courses-create.component';

const routes: Routes = [
    { path : '', component : CoursesListComponent },
    { path : 'edit/:postId', component: CoursesEditComponent },
    { path : 'create', component: CoursesCreateComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class CourseRoutingModule {

}