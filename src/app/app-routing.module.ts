import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import {CommentFormComponent} from './shared/comment-home-form/comment-home-form.component';

const routes: Routes = [
    { path: '', loadChildren: './modules/home/home.module#HomeModule' },
    // { path: 'teste', component: CommentFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
