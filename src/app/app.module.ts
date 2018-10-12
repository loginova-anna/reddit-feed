
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { FeedComponent } from './feed/feed.component';

const routes: Routes = [
  { path: 'post', component: PostComponent },
  { path: 'feed', component: FeedComponent },
  { path: '**', redirectTo: 'feed'},
  { path: '', redirectTo: 'feed', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    CoreModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
