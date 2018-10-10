import { FeedComponent } from './feed/feed.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreviewComponent } from './preview/preview.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PreviewComponent,
    FeedComponent
  ],
  exports: [
    PreviewComponent,
    FeedComponent
  ]
})
export class SharedModule { }
