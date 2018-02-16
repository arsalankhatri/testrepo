import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CcrestrictcallComponent } from './ccrestrictcall.component';
import {NglModule} from 'ng-lightning/ng-lightning';

@NgModule({
  imports: [
    CommonModule,
    NglModule
  ],
  declarations: [CcrestrictcallComponent],
  exports:[CcrestrictcallComponent]
})
export class CcrestrictcallModule { }
