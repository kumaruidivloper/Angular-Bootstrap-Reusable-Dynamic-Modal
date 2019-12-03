import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data1 : string;
  data2 : string;
  data3 : string;


  ngOnInit() {
    this.data1="contentOne";
    this.data2="contentTwo";
    this.data3="contentThree";
  }

}
