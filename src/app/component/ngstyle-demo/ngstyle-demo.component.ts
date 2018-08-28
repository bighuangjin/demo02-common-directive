import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle-demo',
  templateUrl: './ngstyle-demo.component.html',
  styleUrls: ['./ngstyle-demo.component.css']
})
export class NgstyleDemoComponent implements OnInit {
  font = { 'font-size': '17px' };
  constructor() {}

  ngOnInit() {}
}
