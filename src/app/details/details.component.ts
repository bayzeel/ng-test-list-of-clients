import { Component, OnInit } from '@angular/core';

import { CommonService } from '../list/common.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  clientDetailsObj: object;

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.commonService.clientDetailsObj.subscribe(obj => {
      this.clientDetailsObj = JSON.parse(JSON.stringify(obj));
    });
  }
}
