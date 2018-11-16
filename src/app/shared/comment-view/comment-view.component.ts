import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-comment-view',
    templateUrl: './comment-view.component.html',
    styleUrls: ['./comment-view.component.scss']
})
export class CommentViewComponent implements OnInit {

    @Input() type: string;
    private answers: any[];

    constructor() {
        this.answers = [];
    }

    ngOnInit() {
    }

}
