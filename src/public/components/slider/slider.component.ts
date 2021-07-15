import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  public clientReviewList = [{ name: 'Kunal Patidar', city: 'Indore', review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor posuere ac ut consequat semper viverra nam libero justo. Senectus et netus et malesuada fames.' },
  { name: 'Ram Pratap', city: 'Indore', review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor posuere ac ut consequat semper viverra nam libero justo. Senectus et netus et malesuada fames.' },
  { name: 'Hamza Salim', city: 'Ujjain', review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor posuere ac ut consequat semper viverra nam libero justo. Senectus et netus et malesuada fames.' },
  { name: 'Jack Reacher', city: 'Delhi', review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor posuere ac ut consequat semper viverra nam libero justo. Senectus et netus et malesuada fames.' }]
 
  constructor() { }

  ngOnInit(): void {
  }

}
