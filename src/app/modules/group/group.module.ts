import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupComponent } from './group.component';
import {RouterModule, Routes} from '@angular/router';

const ROUTES: Routes = [
    { path: '', component: GroupComponent }
];

@NgModule({
    declarations: [
        GroupComponent,
    ],
    imports: [
        RouterModule.forChild(ROUTES),
        CommonModule
    ]
})
export class GroupModule { }
