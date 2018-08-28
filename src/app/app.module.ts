import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SwitchDemoComponent } from './component/switch-demo/switch-demo.component';
import { NgclassDemoComponent } from './component/ngclass-demo/ngclass-demo.component';
import { NgstyleDemoComponent } from './component/ngstyle-demo/ngstyle-demo.component';

@NgModule({
  declarations: [AppComponent, SwitchDemoComponent, NgclassDemoComponent, NgstyleDemoComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
