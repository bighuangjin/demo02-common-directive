import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass-demo',
  templateUrl: './ngclass-demo.component.html',
  styleUrls: ['./ngclass-demo.component.css']
})
export class NgclassDemoComponent implements OnInit {
  ccc = 'demo2';
  constructor() {}

  ngOnInit() {}
}
