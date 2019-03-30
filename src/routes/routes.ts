import { Routes } from "@angular/router";
import { HomePageComponent } from "src/app/pages/home-page/home-page.component";
import { RegisterCoursePageComponent } from "src/app/pages/register-course-page/register-course-page.component";
import { ExamSchedulePageComponent } from "src/app/pages/exam-schedule-page/exam-schedule-page.component";
import { TimetablePageComponent } from "src/app/pages/timetable-page/timetable-page.component";
import { TuitionfeesPageComponent } from "src/app/pages/tuitionfees-page/tuitionfees-page.component";
import { InfoPageComponent } from "src/app/pages/info-page/info-page.component";
import { PasswordPageComponent } from "src/app/pages/password-page/password-page.component";

export const routesConfig: Routes = [
    { path: "home-page", component: HomePageComponent },
    { path: "register-course-page", component: RegisterCoursePageComponent },
    { path: "exam-schedule-page", component: ExamSchedulePageComponent },
    { path: "timetable-page", component: TimetablePageComponent },
    { path: "tuitionfees-page", component: TuitionfeesPageComponent },
    { path: "student-info", component: InfoPageComponent },
    { path: "change-password", component: PasswordPageComponent }
];
