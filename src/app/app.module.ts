import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatProgressSpinnerModule
} from "@angular/material";

//import { ErrorStateMatcher } from "@angular/material/core";

import { AppComponent } from "./app.component";
//import { ServerComponent } from "./server/server.component";
//import { ServersComponent } from "./servers/servers.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { LoginComponent } from "./auth/login/login.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { HeaderComponent } from "./header/header.component";
import { AuthInterceptor } from "./auth/auth-interceptor";
import { ErrorInterceptor } from "./error-interceptor";
import { ErrorComponent } from "./error/error.component";
import { AngularMaterialModule } from "./angular-material.module";
import { CoursesListComponent } from "./dashboard/courses/courses-list/courses-list.component";
//import { PostsModule } from "./posts/posts.module";
import { CourseService } from "./dashboard/courses/courses.service"
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule {}
