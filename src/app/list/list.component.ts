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
      for(let i = 0; i < this.arrLength; i++){
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

  getClient(client: object): void {
    this.commonService.getClientDetailsObj(client);
  }

  ngOnInit() {
    this.commonService.getAllRecords().then((res) => {
      this.clients = res;
      this.clientsFull = res;
      this.arrLength = res.length;

      // get the first profile after page loaded
      if(res[0]){
        this.commonService.getClientDetailsObj(res[0]);
      }

      /*for(let i = 0; i < this.arrLength; i++){
        console.log(i);
        console.log(this.clientsFull[i]);
        this.clientsFull[i].clientID = i+1;
      }

      this.clients = this.clientsFull;*/
    });
  }

}
