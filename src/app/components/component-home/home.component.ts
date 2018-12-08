import { Component, OnInit } from '@angular/core';
import { ModulePages } from 'src/app/models/module-pages.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   userModules:ModulePages
  /* ********************************************************************************************
	 *                                       INITIALIZATION                                       *
	 **********************************************************************************************/
  
  constructor() { }

  ngOnInit() {
    this.userModules = JSON.parse(localStorage.getItem("userData"));  
  }

}
