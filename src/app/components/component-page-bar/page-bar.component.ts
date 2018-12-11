import { Component, OnInit, Input } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { ModuleModel } from 'src/app/models/module.model';

@Component({
  selector: '[app-page-bar]',
  templateUrl: './page-bar.component.html',
  styleUrls: ['./page-bar.component.css']
})
export class PageBarComponent implements OnInit {

  @Input() activeModule:ModuleModel;

  pageTypes: any[] = [];

  constructor(private service: HomeService) { }

  ngOnInit() {
    this.service.getPageTypes().subscribe(data => {
      let i = 1;
      while (i < 5) {
        this.pageTypes.push({
          name: data[i],
          pages: []
        });
        i++;
      }
    })
  }

  updatePages() {
    //TODO
  }

}
