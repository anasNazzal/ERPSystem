import { Component, OnInit, ViewChild } from '@angular/core';
import { ModuleModel } from 'src/app/models/module.model';

import { HomeService } from "../../services/home.service";
import { PageBarComponent } from '../component-page-bar/page-bar.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userModules: ModuleModel[]
  activeModule: ModuleModel;

  /* ********************************************************************************************
	 *                                       INITIALIZATION                                       *
	 **********************************************************************************************/

  constructor(private service: HomeService) { }

  ngOnInit() {
    this.service.getAllModule().subscribe(data => {
      this.userModules = data;
    });
  }
 
  @ViewChild(PageBarComponent) child: PageBarComponent;
  selectModule(module) {
    this.activeModule = module;
    this.child.updatePages();
  }
}