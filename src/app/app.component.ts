import {Component, ViewChild} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
// import {$} from 'protractor';
// import { } from 'j'
import * as $ from 'jquery';
// import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [
        './app.component.css',
    ]
})

export class AppComponent {

    @ViewChild('menu') menu;
    @ViewChild('main') main;

    title = 'social';
    constructor(){
    }

    ngOnInit(){
        // let centralizedContainers = document.getElementsByClassName('col-center');
        // this.setLikeButtons();
    }

    // likeThis(e): void{
    //     console.log(e);
    //     console.log(e.target);
    // }
    // setLikeButtons(): void{
        // let likeContainers = document.get
    // }

    switchFeedReadType(e, centerBox){

        let currentType = e.target.innerHTML;

        if ( currentType === 'fullscreen' ) {
            e.target.innerHTML = 'fullscreen_exit';
            centerBox.classList.remove('col-center');
        } else {
            e.target.innerHTML = 'fullscreen';
            centerBox.classList.add('col-center');
        }

    }

    menuAction($btn): void {
        // console.log(this);
        // console.log(a);
        // console.log(event);
        // let btn = event.target;

        if ( !this.main.nativeElement.classList.contains('menu-hidden') ) {
            this.main.nativeElement.classList.remove('menu-showing');
            this.main.nativeElement.classList.add('menu-hidden');
            $btn.classList.remove('is-active');
        } else {
            $btn.classList.add('is-active');
            this.main.nativeElement.classList.remove('menu-hidden');
            this.main.nativeElement.classList.add('menu-showing');
        }
    }
}
