import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-timetable-page",
  templateUrl: "./timetable-page.component.html",
  styleUrls: ["./timetable-page.component.css"]
})
export class TimetablePageComponent implements OnInit {
  state: number = 2;

  constructor() {}

  ngOnInit() {}

  changeTable(status: number) {
    this.state = status;
  }
}
