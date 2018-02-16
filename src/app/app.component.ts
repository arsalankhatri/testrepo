import { Component } from '@angular/core';
import { SharedService } from './shared/services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  type: string = 'scoped';
  id: number = 0;
  selectedTab: any = 'sum';
  details: number[] = [];
  ldata:any;

  constructor(private service:SharedService){


  }


  change() {
    this.type = this.type === 'scoped' ? 'default' : 'scoped';
  }

  addDetail() {
    this.details.push(this.id++);
  }

  isDisabled() {
    return this.selectedTab === 'sum' || this.selectedTab.id === 'sum';
  }

  protected tabChange(detail: number, event: string) {
    console.log('detail', detail, event);
  }

  protected removeDetail(detail: Object) {
    this.details = this.details.filter((d) => d !== detail);
    setTimeout(() => this.selectedTab = 'sum');
  }
}
