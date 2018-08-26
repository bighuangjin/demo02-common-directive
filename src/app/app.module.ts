import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SwitchDemoComponent } from './component/switch-demo/switch-demo.component';

@NgModule({
  declarations: [AppComponent, SwitchDemoComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
