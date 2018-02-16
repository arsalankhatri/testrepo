import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, search:string): any {
    
    if(search == null) return value;
    
            return value.filter(function(val){
              return val.toLowerCase().indexOf(search.toLowerCase()) > -1;
            })
  }

}
