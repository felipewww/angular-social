import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import {RouterModule, Routes} from '@angular/router';

const ROUTES: Routes = [
    { path: '', component: CoursesComponent }
];

@NgModule({
    declarations: [CoursesComponent],
    imports: [
        RouterModule.forChild(ROUTES),
        CommonModule
    ]
})
export class CoursesModule { }
