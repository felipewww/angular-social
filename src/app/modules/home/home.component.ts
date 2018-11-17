import { Component, OnInit } from '@angular/core';
import {FeedItemModel} from '../../models/FeedItem.model';
import {FeedItemService} from '../../shared/feed/feed-item/feed-item.service';

@Component({
    selector: 'app-page',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    private posts: Array<FeedItemModel>;

    constructor(private feedItemService: FeedItemService) { }

    ngOnInit() {
        this.posts = this.feedItemService.items();
    }
}
