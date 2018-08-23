import { Component, TemplateRef, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  arr = [1, 2, 3];
  bool = true;
  // 下面代码都是 if - then - else需要用的
  thenCheck: TemplateRef<any> | null = null;
  show = true;

  @ViewChild('first') first: TemplateRef<any> | null = null;
  @ViewChild('second') second: TemplateRef<any> | null = null;

  switchPrimary() {
    this.thenCheck = this.thenCheck === this.first ? this.second : this.first;
  }

  ngOnInit() {
    this.thenCheck = this.first;
  }
}
