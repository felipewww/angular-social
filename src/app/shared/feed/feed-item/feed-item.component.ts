import {Component, EventEmitter, Injectable, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FeedItemModel} from '../../../models/FeedItem.model';
import {FeedItemService} from './feed-item.service';

@Component({
    selector: 'app-feed-item',
    templateUrl: './feed-item.component.html',
    styleUrls: [
        './feed-item.component.scss',
        '../../assets/flexbin-master/flexbin.scss',
    ]
})

// @Injectable()
export class FeedItemComponent implements OnInit {

    @Input() item: FeedItemModel;
    private bgImage: string;

    // constructor(feedItemService: FeedItemService) { }
    constructor() { }

    ngOnInit() {
        this.bgImage = `url(${this.item.image})`;
    }

    liked(): object {
        console.log('adicionar like do feed item id: ' + this.item.id + ' para o usuário logado');
        return { status: true };
    }

    unliked(): object {
        console.log('remover like do feed item id: ' + this.item.id + ' do usuário logado');
        return { status: true };
    }
}
