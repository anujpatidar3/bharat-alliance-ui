import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  currentYear=2020;
  emailLink="mailto:no-one@snai1mai1.com?subject=Enquiry!!&body=Hi Team, %0D%0A%0D%0A We are looking for some information and wanted to connect. Please find the details below.%0D%0A %0D%0A Name: %0D%0A Contact: %0D%0A Location: %0D%0A%0D%0A  Thanks";
  constructor() { }

  ngOnInit(): void {
    this.currentYear=new Date().getFullYear();
  }

}
