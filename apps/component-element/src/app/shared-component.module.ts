import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  SharedComponent,
  SharedComponentModule
} from '@code-sharing/shared-component';

@NgModule({
  imports: [SharedComponentModule],
  exports: [BrowserAnimationsModule],
  declarations: [],
  entryComponents: [SharedComponent],
  providers: []
})
export class ElementComponentModule {
  constructor(injector: Injector) {
    const component = createCustomElement(SharedComponent, { injector });
    customElements.define('shared-component', component);
  }

  ngDoBootstrap() {}
}
