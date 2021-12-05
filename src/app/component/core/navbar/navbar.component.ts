import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userLogin: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.userLogin = JSON.parse(<string>localStorage.getItem('userLogin'))
  }
  logout() {
    localStorage.removeItem('userLogin');
    this.router.navigate(['login'])
  }
}
