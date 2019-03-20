import { Routes } from '@angular/router';
import { HomePageComponent } from 'src/app/pages/home-page/home-page.component';
import { RegisterCoursePageComponent } from 'src/app/pages/register-course-page/register-course-page.component';
import { ExamSchedulePageComponent } from 'src/app/pages/exam-schedule-page/exam-schedule-page.component';
import { TimetablePageComponent } from 'src/app/pages/timetable-page/timetable-page.component';
import { TuitionfeesPageComponent } from 'src/app/pages/tuitionfees-page/tuitionfees-page.component';


const routesConfig: Routes = [
    { path: 'home-page', component: HomePageComponent },
    { path: 'register-course-page', component: RegisterCoursePageComponent },
    { path: 'exam-schedule-page', component: ExamSchedulePageComponent },
    { path: 'timetable-page', component: TimetablePageComponent },
    { path: 'tuitionfees-page', component: TuitionfeesPageComponent }
]

export default routesConfig;