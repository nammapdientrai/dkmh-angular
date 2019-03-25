import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.css']
})
export class InfoPageComponent implements OnInit {
  statusBtn = false;
  

  changeUpdate: number = 0;

  constructor(
     
  ) { }

  ngOnInit() {
      

  }

  createForm() {
      
  }

  onSubmit() {
      this.changeUpdate = 0;

      

  }

  updateUser() {
     
  }

  changeCompoent(n: number){
      
  }
}
