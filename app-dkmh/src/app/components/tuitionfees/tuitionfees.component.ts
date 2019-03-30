import { Component, OnInit } from "@angular/core";
import { subjects } from "src/app/model/subjects.model";
import { students } from "src/app/model/students.model";
import { GetDataService } from "src/app/service/get-data.service";

@Component({
  selector: "app-tuitionfees",
  templateUrl: "./tuitionfees.component.html",
  styleUrls: ["./tuitionfees.component.css"]
})
export class TuitionfeesComponent implements OnInit {
  listSubjects: Array<subjects> = new Array<subjects>();

  totalSTC: number = 0;
  totalMoney: number = 0;


  constructor(private getDataService: GetDataService) {}

  ngOnInit() {
    this.getDataService.getStudentID(14130008).subscribe((data: students) => {
      data.subjects.forEach((e: subjects) => {
        this.pushSubject(e);
        this.totalSTC += e.stc;
        this.totalMoney += (e.stc * e.gia.gia_tc);
      });
    });
  }

  pushSubject(e: subjects) {
    this.listSubjects.push(e);
  }
}
