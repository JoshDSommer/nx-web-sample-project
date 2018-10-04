import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { SharedCoreModule } from '@code-sharing/shared-core';
import { SharedComponentModule } from '@code-sharing/shared-component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    SharedCoreModule,
    SharedComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
