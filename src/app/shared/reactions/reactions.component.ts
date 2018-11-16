import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-reactions',
    templateUrl: './reactions.component.html',
    styleUrls: ['./reactions.component.scss']
})
export class ReactionsComponent implements OnInit {

    @Input() containerClass: string;

    constructor() { }

    ngOnInit() {
    }

}
