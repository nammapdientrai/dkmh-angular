import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import routesConfig from 'src/routes/routes';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RegisterCoursePageComponent } from './pages/register-course-page/register-course-page.component';
import { ExamSchedulePageComponent } from './pages/exam-schedule-page/exam-schedule-page.component';
import { TimetablePageComponent } from './pages/timetable-page/timetable-page.component';
import { TuitionfeesPageComponent } from './pages/tuitionfees-page/tuitionfees-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    NavigationComponent,
    RegisterCoursePageComponent,
    ExamSchedulePageComponent,
    TimetablePageComponent,
    TuitionfeesPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routesConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
