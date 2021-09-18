import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  showChat=false;
  constructor() { }

  ngOnInit(): void {
  }

  showPopUp(){
this.showChat=true;
  }

  hidePopUp(){
    this.showChat=false;
  }

}
