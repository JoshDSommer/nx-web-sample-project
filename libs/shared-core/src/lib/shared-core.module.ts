import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteHeaderComponent } from './site-header/site-header.component';
@NgModule({
  imports: [CommonModule],
  declarations: [SiteHeaderComponent],
  exports: [SiteHeaderComponent]
})
export class SharedCoreModule {}
