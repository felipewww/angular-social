import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import {CommentFormComponent} from './shared/comment-home-form/comment-home-form.component';

const routes: Routes = [
    { path: '', loadChildren: './modules/home/home.module#HomeModule' },
    { path: 'group', loadChildren: './modules/group/group.module#GroupModule' },
    { path: 'wiki', loadChildren: './modules/wiki/wiki.module#WikiModule' },
    { path: 'courses', loadChildren: './modules/courses/courses.module#CoursesModule' },
    { path: 'store', loadChildren: './modules/store/store.module#StoreModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
