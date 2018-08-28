import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgstyleDemoComponent } from './ngstyle-demo.component';

describe('NgstyleDemoComponent', () => {
  let component: NgstyleDemoComponent;
  let fixture: ComponentFixture<NgstyleDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgstyleDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgstyleDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
