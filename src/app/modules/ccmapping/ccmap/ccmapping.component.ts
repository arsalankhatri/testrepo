import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { callData } from './callData';
import { MapService } from '../services/map.service';



@Component({
  selector: 'app-ccmapping',
  templateUrl: './ccmapping.component.html',
  styleUrls: ['./ccmapping.component.css']
})
export class CcmappingComponent implements OnInit {

  mapdata: any;
  fielddata:any;
  showAlert = false;
  errorMessage:string;

  constructor(private route: ActivatedRoute,private cData:callData,private mapservice:MapService,private router: Router) {
    route.params.subscribe(data => {
        this.mapdata = cData.initData(data.id);
        
        console.log(this.mapdata);

      });
    }
  

  ngOnInit() {
    this.mapservice.getallfields().subscribe(data=>{
        this.fielddata=data;
    })
  }

  save(data){
    if(data.object!="" && data.phone1!=""){
    if(data.id==0){
    this.mapservice.create(data).subscribe(data=>{
    this.router.navigate(['/ccmaplist'])
    })
  }
  else{
    this.mapservice.update(data.id,data).subscribe(data=>{
      this.router.navigate(['/ccmaplist'])
      })
  }
}
else
{
  this.showerror("Enter Required (*) fields");
}
  }

  showerror(message) {
    this.errorMessage=message
    this.showAlert = true;
    
  }

  onClose(reason: string) {
    console.log(`Alert closed by ${reason}`);
    this.showAlert = false;
  }

}
