import {Component, Injectable, Input, OnInit} from '@angular/core';
import {FeedItemModel} from '../../../models/FeedItem.model';

@Component({
    selector: 'app-feed-item',
    templateUrl: './feed-item.component.html',
    styleUrls: ['./feed-item.component.scss']
})

@Injectable()
export class FeedItemComponent implements OnInit {

    @Input() item: FeedItemModel;
    private bgImage: string;
    constructor() { }

    ngOnInit() {
        this.bgImage = `url(${this.item.image})`;
    }
}
