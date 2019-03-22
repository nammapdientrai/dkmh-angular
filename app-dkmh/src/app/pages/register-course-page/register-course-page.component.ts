import { Component, OnInit } from "@angular/core";
import { GetDataService } from "src/app/service/get-data.service";
import { subjects } from "src/app/model/subjects.model";
import { Observable } from "rxjs";

@Component({
  selector: "app-register-course-page",
  templateUrl: "./register-course-page.component.html",
  styleUrls: ["./register-course-page.component.css"]
})
export class RegisterCoursePageComponent implements OnInit {
  listSubjects: Observable<subjects>;

  constructor(private getdataService: GetDataService) {}

  ngOnInit() {
    this.listSubjects = this.getdataService.getListSubjects();
  }

  getDay(day: number): string {
    let tmp = "";

    switch (day) {
      case 2:
        tmp = "Hai";
        break;

      case 3:
        tmp = "Ba";
        break;

      case 4:
        tmp = "Tư";
        break;

      case 5:
        tmp = "Năm";
        break;

      case 6:
        tmp = "Sáu";
        break;

      case 7:
        tmp = "Bảy";
        break;

      default:
        break;
    }

    return tmp;
  }
}
