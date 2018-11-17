import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CommentViewComponent } from './shared/feed/comment-view/comment-view.component';
import { CommentFormComponent } from './shared/feed/comment-form/comment-form.component';
import { ReactionsComponent } from './shared/reactions/reactions.component';
import {MaterialModule} from './core/material.module';

import 'hammerjs';
import {MatDialogModule, MatProgressBarModule} from '@angular/material';
import {SwiperDialogComponent} from './shared/swiper-dialog/swiper-dialog.component';
// import {MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material';
// import { SwiperDialogComponent } from './shared/swiper-dialog/swiper-dialog.component';

@NgModule({
    declarations: [
        // SwiperDialogComponent,
        AppComponent,
        // CommentViewComponent,
        // CommentFormComponent,
        // ReactionsComponent
    ],
    imports: [
        MatProgressBarModule,
        MatDialogModule,
        BrowserModule,
        AppRoutingModule,
        NgbModule.forRoot(),
        BrowserAnimationsModule,
        MaterialModule,
    ],
    exports: [
        MaterialModule
    ],
    providers: [
        // { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true} }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
