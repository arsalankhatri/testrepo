import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NglModule} from 'ng-lightning/ng-lightning';
import { UserconfigurationComponent } from './userconfiguration.component';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { UserconfigurationService } from './userconfiguration.service';

@NgModule({
  providers:[UserconfigurationService],
    imports: [
    CommonModule,
    NglModule,
    FormsModule,
    AngularFontAwesomeModule
    
  ],
  declarations: [UserconfigurationComponent],
  exports:[UserconfigurationComponent]
})
export class UserconfigurationModule { }
