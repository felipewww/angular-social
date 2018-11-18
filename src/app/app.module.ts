import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MaterialModule} from './core/material.module';

import 'hammerjs';
import {MatDialogModule, MatProgressBarModule} from '@angular/material';

@NgModule({
    declarations: [
        AppComponent,
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
