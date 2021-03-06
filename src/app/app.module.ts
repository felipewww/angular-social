import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MaterialModule} from './core/material.module';

import 'hammerjs';
import {MatDialogModule, MatProgressBarModule} from '@angular/material';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { ChatComponent } from './default/chat/chat.component';
import { HeaderComponent } from './default/header/header.component';
import { MenuComponent } from './default/menu/menu.component';
// import {CoreModule} from './core/core.module';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true,
    wheelPropagation: false
};

@NgModule({
    declarations: [
        AppComponent,
        ChatComponent,
        HeaderComponent,
        MenuComponent,
    ],
    imports: [
        MatProgressBarModule,
        MatDialogModule,
        BrowserModule,
        AppRoutingModule,
        NgbModule.forRoot(),
        BrowserAnimationsModule,
        MaterialModule,
        PerfectScrollbarModule,
        // CoreModule
    ],
    exports: [
        MaterialModule,
        // CoreModule
    ],
    providers: [
        {
            provide: PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        },
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
