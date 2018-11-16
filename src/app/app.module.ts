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

@NgModule({
    declarations: [
        AppComponent,
        // CommentViewComponent,
        // CommentFormComponent,
        // ReactionsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule.forRoot(),
        BrowserAnimationsModule,
        MaterialModule,
    ],
    exports: [
        MaterialModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
