import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {WikiComponent} from './wiki.component';

const ROUTES: Routes = [
    { path: '', component: WikiComponent }
];

@NgModule({
    declarations: [
        WikiComponent
    ],
    imports: [
        RouterModule.forChild(ROUTES),
        CommonModule
    ]
})
export class WikiModule { }
