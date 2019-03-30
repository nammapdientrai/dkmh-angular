import { Component, OnInit } from "@angular/core";
import { subjects } from "src/app/model/subjects.model";
import { GetDataService } from "src/app/service/get-data.service";
import { students } from 'src/app/model/students.model';

@Component({
  selector: "app-timetable-row",
  templateUrl: "./timetable-row.component.html",
  styleUrls: ["./timetable-row.component.css"]
})
export class TimetableRowComponent implements OnInit {
  listSubjects: Array<subjects> = new Array<subjects>();

  constructor(private getDataService: GetDataService) {}

  ngOnInit() {
    this.getDataService.getStudentID(14130008).subscribe((data: students) => {
      data.subjects.forEach((e: subjects) => {
        this.pushSubject(e);
        console.log(e);
      });
    });
  }

  pushSubject(e: subjects) {
    this.listSubjects.push(e);
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
