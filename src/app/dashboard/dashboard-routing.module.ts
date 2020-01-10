import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { BlogspotComponent } from "./blogspot/blogspot.component";
import { CoursesComponent } from "./courses/courses.component";
import { DashboardComponent } from "./dashboard.component";
import { DashboardEditComponent } from "./dashboard-edit/dashboard-edit.component";
import { DashboardListComponent } from "./dashboard-list/dashboard-list.component";
import { DashboardCreateComponent } from "./dashboard-create/dashboard-create.component";

const routes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "blogspot", component: BlogspotComponent },
  { path: "course", component: CoursesComponent },
  { path: "dashbaordEdit", component: DashboardEditComponent},
  { path: "dashboardList", component: DashboardListComponent},
  { path: "dashboardCreate", component: DashboardCreateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashBoardRoutingModule {}
