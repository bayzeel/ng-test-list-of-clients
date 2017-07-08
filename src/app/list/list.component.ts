import { Component, OnInit } from '@angular/core';

import { CommonService } from './common.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  clients: any;
  clientsFull: any;
  arrLength: number;

  typingTimer: any;

  constructor(private commonService : CommonService) { }

  search(term: string): void {
    // angular's debounceTime() alternative
    clearTimeout(this.typingTimer);
    this.typingTimer = setTimeout(() => {
      let tempArr = [];

      term = term.toLowerCase();

      // deep search
      outer:
        for(let i = 0; i <= this.arrLength; i++){
          let parentObj = this.clientsFull[i];
          for(let index in parentObj){
            if(typeof parentObj[index] === 'object'){
              let childObj = parentObj[index];
              for(let idx in childObj){
                let objVal = String(childObj[idx]).toLowerCase();
                if(idx !== 'avatar' && objVal.indexOf(term) !== -1){
                  tempArr.push(this.clientsFull[i]);
                  continue outer;
                }
              }
            }
          }
        }
      this.clients = tempArr.slice();
      tempArr.length = 0;
    }, 300);
  }

  ngOnInit() {
    this.commonService.getAllRecords().then((res) => {
      this.clients = res;
      this.clientsFull = res;
      this.arrLength = res.length;
    });
  }

}
