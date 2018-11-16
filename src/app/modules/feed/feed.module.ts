import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './components/item/item.component';
import { FormComponent } from './components/form/form.component';
import { PageComponent } from './page/page.component';

import {Routes, RouterModule} from '@angular/router';
import {MaterialModule} from '../../shared/material/material.module';

import {CommentViewComponent} from '../../shared/comment-view/comment-view.component';
import {CommentFormComponent} from '../../shared/comment-form/comment-form.component';
import {ReactionsComponent} from '../../shared/reactions/reactions.component';

const ROUTES: Routes = [
    { path: '', component: PageComponent }
];

@NgModule({
    declarations: [
        ItemComponent,
        FormComponent,
        PageComponent,
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
export class FeedModule { }
