import { Injectable, OnInit } from '@angular/core';
import { Http } from '@angular/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';



const url = 'http://localhost:3000/data/';
const fieldurl='http://localhost:3000/phoneField/'
@Injectable()
export class MapService {
  alldata: any = [];


  constructor(private http: Http) {
  }


  create(data:iData):Observable<any>{
    
   return this.http.post(url, data);
    
  }
  read(): Observable<iData> {

    return this.http.get(url).map(res => {
      return res.json();
    })

  }
  update(id, data:iData) :Observable<any>{
    return this.http.put(url + id, data);
  }
  delete(id):Observable<any> {
    return this.http.delete(url + id);
  }

  getallfields(): Observable<any>{
    return this.http.get(fieldurl).map(res => {
      return res.json();
  });
  }
}
