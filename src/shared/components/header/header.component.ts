import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isMenuToggeled=false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  menutoggle(){

    this.isMenuToggeled=!this.isMenuToggeled;

  }

  navigateToHome(){
    this.menutoggle();
    this.router.navigate( ['/home']);
  }
  navigateToAbout(){
    this.menutoggle();
    this.router.navigate( ['/about']);
  }

}
