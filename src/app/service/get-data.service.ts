import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { subjects } from "../model/subjects.model";
import { students } from "../model/students.model";
import { heroku, local } from '../contants/links.contnts';

@Injectable({
  providedIn: "root"
})
export class GetDataService {
  constructor(private http: HttpClient) {}

  getListSubjects() {
    return this.http.get<subjects>(heroku + "api/subjects");
  }

  getStudentID(maso_sv: number) {
    return this.http.get<students>(heroku + "api/students/" + maso_sv);
  }
}
