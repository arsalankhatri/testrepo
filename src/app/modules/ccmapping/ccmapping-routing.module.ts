import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { CcmappinglistComponent } from './ccmappinglist/ccmappinglist.component';
import { CcmappingComponent } from './ccmap/ccmapping.component';

const routes: Routes = [
  { path: '', redirectTo: '/ccmaplist', pathMatch: 'full' },
  { path: 'ccmaplist', component: CcmappinglistComponent},
  { path: 'ccmap', component: CcmappingComponent},
  { path: 'ccmap/:id', component: CcmappingComponent},

  ];
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class CcmappingRoutingModule { 
  constructor(){console.log('routing')};
}
