import {Component, Input, OnInit} from '@angular/core';
import {ReactionsModel} from '../../models/ReactionsModel';

@Component({
    selector: 'app-reactions',
    templateUrl: './reactions.component.html',
    styleUrls: ['./reactions.component.scss']
})
export class ReactionsComponent implements OnInit {

    @Input() containerClass: string;
    @Input() data: ReactionsModel;

    constructor() { }

    ngOnInit() {
    }

    reactionsText(): string {
        return ( this.data.total > 1 || this.data.total === 0 ) ? 'reações' : 'reação';
    }
}
