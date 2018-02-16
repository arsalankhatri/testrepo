import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CcmappingComponent} from './ccmap/ccmapping.component';
import {NglModule} from 'ng-lightning/ng-lightning';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CcmappinglistComponent } from './ccmappinglist/ccmappinglist.component';
import { CcmappingRoutingModule } from './ccmapping-routing.module';
import { CcmappingmainComponent } from './ccmappingmain.component';
import { callData } from './ccmap/callData';
import { MapService } from './services/map.service';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    NglModule,
    CcmappingRoutingModule,
    AngularFontAwesomeModule,
    FormsModule,
    HttpModule
  ],
  providers:[callData,MapService],
  declarations: [CcmappingComponent, CcmappinglistComponent, CcmappingmainComponent],
  exports:[CcmappingComponent,CcmappinglistComponent,CcmappingmainComponent]
})
export class CcmappingModule {


 }
