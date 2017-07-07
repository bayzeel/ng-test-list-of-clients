import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CommonService {

  constructor(private http: Http) { }

  getAllRecords(){
    let url = 'assets/data/clients.json';
    return this.http.get(url)
      .toPromise()
      .then(res => res.json() as any)
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.log('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
