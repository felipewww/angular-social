import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import {CommentFormComponent} from './shared/comment-form/comment-form.component';

const routes: Routes = [
    { path: '', loadChildren: './modules/feed/feed.module#FeedModule' },
    // { path: 'teste', component: CommentFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
