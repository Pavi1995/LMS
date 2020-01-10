import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { CoursesComponent } from "./courses/courses.component";
import { BlogspotComponent } from "./blogspot/blogspot.component";
import { AngularMaterialModule } from "../angular-material.module";
import { DashBoardRoutingModule } from "./dashboard-routing.module";

@NgModule({
  declarations: [CoursesComponent, BlogspotComponent],
  imports: [CommonModule, AngularMaterialModule, FormsModule, DashBoardRoutingModule]
})
export class AuthModule {}
