import { Component, OnInit } from '@angular/core';

import { CommonService } from './list/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  clients: any;

  constructor(private commonService : CommonService){}

  ngOnInit() {
    this.commonService.getAllRecords().then((res) => {
      console.log(res);
      this.clients = res;
    });
  }
}
