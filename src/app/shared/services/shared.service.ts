import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SharedService {
  data=[];
  dataChange:Observable<any>;
  dataChangeObserver:any;

  constructor() {
    this.dataChange=new Observable(observer=>{
      console.log(observer);
      this.dataChangeObserver=observer;
    })
   }

   setData(data:any){
    this.data.push(data);
    this.dataChangeObserver.next(this.data);
   }

  filter(items: Array<{ [key: string]: any }>, term: string): Array<{ [key: string]: any }> {
     
    const toCompare = term.toLowerCase();

    return items.filter(function (item: any) {
   
      for (let property in item) {
        if (item[property] === null) {
          continue;
        }
        if (item[property].toString().toLowerCase().includes(toCompare)) {
          return true;
        }
      }
      return false;
    });
  }

}
