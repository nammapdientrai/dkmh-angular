import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { subjects } from '../model/subjects.model';
import { students } from '../model/students.model';

@Injectable({
    providedIn: "root"
})

export class GetDataService{
    constructor(private http: HttpClient){

    }

    getListSubjects(){
        return this.http.get<subjects>("http://localhost:8888/api/subjects");
    }

    getStudentID(maso_sv: number){
        return this.http.get<students>("http://localhost:8888/api/students/" + maso_sv);
    }
}



