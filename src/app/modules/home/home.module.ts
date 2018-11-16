import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedItemComponent } from '../../shared/feed/feed-item/feed-item.component';
import { FeedFormComponent } from '../../shared/feed/feed-form/feed-form.component';
import { HomeComponent } from './home.component';

import {Routes, RouterModule} from '@angular/router';
import {MaterialModule} from '../../shared/material/material.module';

import {CommentViewComponent} from '../../shared/feed/comment-view/comment-view.component';
import {CommentFormComponent} from '../../shared/feed/comment-form/comment-form.component';
import {ReactionsComponent} from '../../shared/reactions/reactions.component';

const ROUTES: Routes = [
    { path: '', component: HomeComponent }
];

@NgModule({
    declarations: [
        FeedItemComponent,
        FeedFormComponent,
        HomeComponent,
        CommentViewComponent,
        // CommentFormComponent,
        ReactionsComponent
    ],
    imports: [
        // RouterModule,
        RouterModule.forChild(ROUTES),
        CommonModule,
        MaterialModule
    ]
})
export class HomeModule { }
