import { Component, OnInit } from "@angular/core";
import { students } from "src/app/model/students.model";
import { GetDataService } from "src/app/service/get-data.service";
import { subjects } from "src/app/model/subjects.model";

import { days, stts } from "../../contants/menus.contants";

@Component({
  selector: "app-timetable-week",
  templateUrl: "./timetable-week.component.html",
  styleUrls: ["./timetable-week.component.css"]
})
export class TimetableWeekComponent implements OnInit {
  listSubject: Array<subjects> = new Array<subjects>();
  days: any = days;
  stts: number[] = stts;

  constructor(private getDataService: GetDataService) {}

  ngOnInit() {
    this.getDataService.getStudentID(14130008).subscribe((data: students) => {
      data.subjects.forEach((e: subjects) => {
        this.pushSubject(e);
      });
    });
  }

  pushSubject(e: subjects) {
    this.listSubject.push(e);
  }

  getSubjectLT(j: number, i: number): string {
    let s: string = '';

    this.listSubject.forEach(ee => {
      if (ee.times.ngh_lt == i && ee.times.tiet_bd_lt == j) {
        s = 'MH: ' + ee.ten_mh + '';
        return;
      }
    });
    return s;
  }

  getSubjectTH(j: number, i: number): string {
    let s: string = '';

    this.listSubject.forEach(ee => {
      if (ee.times.ngh_th == i && ee.times.tiet_bd_th == j) {
        s = 'MH: ' + ee.ten_mh + '';
        return;
      }
    });

    return s;
  }
}
