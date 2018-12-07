import { Component, OnInit } from '@angular/core';
import { ModulePages } from 'src/app/models/module-pages.model';

import { HomeService } from "../../services/home.service";

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
  
  constructor(private service: HomeService) { }

  ngOnInit() {
    this.service.getAllModule().subscribe(data => {
      this.userModules = data;
    });
  }

}