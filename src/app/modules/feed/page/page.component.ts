import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

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
}
