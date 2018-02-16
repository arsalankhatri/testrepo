import { Component, OnInit } from '@angular/core';
import { INglDatatableRowClick, INglDatatableSort } from 'ng-lightning';
import { SharedService } from '../../../shared/services/shared.service';
import { MapService } from '../services/map.service';
// import * as jdata from '../JSON/data.json'

// const DATA = [
//   { id: 1, object: 'Kareem', phone1: 'Office',priority1:1, phone2: 'Desk',priority2:3,phone3:'Fax',priority3:2 },
//   { id: 2, object: 'Karl', phone1: 'Desk',priority1:3, phone2: 'Office',priority2:1,phone3:'Fax',priority3:2 },
//   { id: 3, object: 'Kobe', phone1: 'Home',priority1:1, phone2: 'Fax',priority2:3,phone3:'Desk',priority3:2 },
//   { id: 4, object: 'Michael', phone1: 'Fax', phone2: 'Home' },
//   { id: 5, object: 'Wilt', phone1: 'Home' },
// ];

// const DATA =jdata;

@Component({
  selector: 'app-ccmappinglist',
  templateUrl: './ccmappinglist.component.html',
  styleUrls: ['./ccmappinglist.component.css']
})
export class CcmappinglistComponent implements OnInit {

  data: any = [];
  opened: boolean = false;
  selectedrow: any;
  JSON: any;
  constructor(private service: SharedService, private mapservice: MapService) {
    this.JSON = JSON;
  }


  ngOnInit() {
    // this.data = DATA;
    //GET LIST OF ALL OBJECTS
    this.getallobjects();
    // this.data=this.mapservice.alldata;

  }

  getallobjects() {
    this.mapservice.read().subscribe(data => {
      this.data = data;
    })
  }


  // Initial sort
  sort: INglDatatableSort = { key: 'id', order: 'asc' };

  // Show loading overlay
  loading = false;

  // Toggle name column
  hideName = false;

  // Custom sort function
  onSort($event: INglDatatableSort) {
    const { key, order } = $event;
    this.data.sort((a: any, b: any) => {
      return (key === 'id' ? b[key] - a[key] : b[key].localeCompare(a[key])) * (order === 'desc' ? 1 : -1);
    });
  }


  // textchange(value) {

  //   if (value == null) { this.data = this.mapservice.alldata; }

  //   this.data = this.service.filter(this.mapservice.alldata, value);
  // }

  editRow(event) {
    console.log(event);
  }
  openModal(data) {
    this.selectedrow = data;
    this.opened = !this.opened;

  }

  delete(row) {
    this.mapservice.delete(row.id).subscribe(() => {
      this.opened = !this.opened;
      this.selectedrow = {};
      this.getallobjects();
    });
    //   console.log(row);
    //   this.data.splice(row.id,1);
    //  //this.data=DATA;

  }
  cancel() {
    this.opened = !this.opened;
    this.selectedrow = {};
  }


}
