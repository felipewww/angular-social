import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store.component';
import {RouterModule, Routes} from '@angular/router';
import {WikiComponent} from '../wiki/wiki.component';

const ROUTES: Routes = [
    { path: '', component: StoreComponent }
];

@NgModule({
    declarations: [StoreComponent],
    imports: [
        RouterModule.forChild(ROUTES),
        CommonModule
    ]
})
export class StoreModule { }
