import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NglModule} from 'ng-lightning/ng-lightning';
import { AppComponent } from './app.component';
import { UserconfigurationModule } from './modules/userconfiguration/userconfiguration.module';
import { SearchPipe } from './shared/pipes/search.pipe';
import { SharedService } from './shared/services/shared.service';
import { CcmappingModule } from './modules/ccmapping/ccmapping.module';
import { CcrestrictcallModule } from './modules/ccrestrictcall/ccrestrictcall.module';


@NgModule({
  declarations: [
    AppComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    UserconfigurationModule,
    NglModule.forRoot({
    }),
    CcmappingModule,
    CcrestrictcallModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
