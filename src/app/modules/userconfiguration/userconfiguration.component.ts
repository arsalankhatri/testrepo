import { Component, OnInit } from '@angular/core';
import { INglDatatableSort, INglDatatableRowClick } from 'ng-lightning/datatables/datatable';
import { SharedService } from '../../shared/services/shared.service';
import { UserconfigurationService } from './userconfiguration.service';


const DATA = [
  { rank: 1, name: 'Kareem', surname: 'Abdul-Jabbar', points: 38387 },
  { rank: 2, name: 'Karl', surname: 'Malone', points: 36928 },
  { rank: 3, name: 'Kobe', surname: 'Bryant', points: 33643 },
  { rank: 4, name: 'Michael', surname: 'Jordan', points: 32292 },
  { rank: 5, name: 'Wilt', surname: 'Chamberlain', points: 31419 },
];

@Component({
  selector: 'app-userconfiguration',
  templateUrl: './userconfiguration.component.html',
  styleUrls: ['./userconfiguration.component.css']
})
export class UserconfigurationComponent implements OnInit {
  
  hdata:any;
  data:any;
  constructor(private service:SharedService,private innerservice:UserconfigurationService){
  //   console.log('userconfig_constructor')
   
  //  service.dataChange.subscribe((d)=>{
  //   console.log(d)
  //     this.hdata=d;
  //   })

  //   if(service.data.length>0){
  //   this.hdata=service.data;
  //   }
  }
  // setData() {
  //   console.log('b');
  //   this.service.setData({ attr: 'some value' });
  // }

  ngOnInit() {
    this.data = DATA;
  }

  
    // Initial sort
    sort: INglDatatableSort = { key: 'rank', order: 'asc' };
  
    // Show loading overlay
    loading = false;
  
    // Toggle name column
    hideName = false;
  
    // Custom sort function
    onSort($event: INglDatatableSort) {
      const { key, order } = $event;
      this.data.sort((a: any, b: any) => {
        return (key === 'rank' ? b[key] - a[key] : b[key].localeCompare(a[key])) * (order === 'desc' ? 1 : -1);
      });
    }
  
    toggleData() {
      this.data = this.data ? null : DATA;
    }
  
    onRowClick($event: INglDatatableRowClick) {
      console.log('clicked row', $event.data);
    }

    textchange(value){

      if(value == null)
      {this.data=DATA;}

              // this.data=DATA.filter(function(val){
              //   console.log(val);
              //   return val.name.toLowerCase().indexOf(value.toLowerCase()) > -1;
              // })

            this.data= this.service.filter(DATA,value);
    }


   
  
}
