import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [
        './app.component.css',
        './default/assets/radar-notify/radar-notify.scss',
    ],
})

export class AppComponent {

    @ViewChild('menu') menu;
    @ViewChild('main') main;

    constructor() {
    }

    menuAction($btn): void {
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
