import { OptionsListComponent } from './options-list/options-list.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CommentThreadComponent } from './comment-thread/comment-thread.component';
import { CommentComponent } from './comment/comment.component';
import { AmountTogglerComponent } from './amount-toggler/amount-toggler.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreviewComponent } from './preview/preview.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PreviewComponent,
    AmountTogglerComponent,
    CommentComponent,
    CommentThreadComponent,
    NavigationComponent,
    OptionsListComponent
  ],
  exports: [
    PreviewComponent,
    AmountTogglerComponent,
    CommentComponent,
    CommentThreadComponent,
    NavigationComponent,
    OptionsListComponent
  ]
})
export class SharedModule { }
