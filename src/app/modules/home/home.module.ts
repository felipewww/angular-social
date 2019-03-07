import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedItemComponent } from '../../shared/feed/feed-item/feed-item.component';
import { FeedFormComponent } from '../../shared/feed/feed-form/feed-form.component';
import { HomeComponent } from './home.component';

import {Routes, RouterModule} from '@angular/router';
import {MaterialModule} from '../../core/material.module';

import {CommentViewComponent} from '../../shared/feed/comment-view/comment-view.component';
import {ReactionsComponent} from '../../shared/reactions/reactions.component';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule, MatDialogRef} from '@angular/material';
import {SwiperDialogComponent} from '../../shared/swiper-dialog/swiper-dialog.component';
// import {CoreModule} from '../../core/core.module';
import {CoreModule} from '../../core/core.module';
// import {SocketPrivateChatService} from '../../socket-private-chat.service';

const ROUTES: Routes = [
    { path: '', component: HomeComponent }
];

@NgModule({
    declarations: [
        SwiperDialogComponent,
        FeedItemComponent,
        FeedFormComponent,
        HomeComponent,
        CommentViewComponent,
        ReactionsComponent,
    ],
    imports: [
        MatDialogModule,
        RouterModule.forChild(ROUTES),
        CommonModule,
        MaterialModule,
        // CoreModule.forRoot('paramStrTeste')
        CoreModule
    ],
    entryComponents: [
        SwiperDialogComponent
    ],
    providers: [
        { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true} },
        // SocketPrivateChatService
    ],
})
export class HomeModule {
    constructor() {
    }
}
