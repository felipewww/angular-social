import {Component, EventEmitter, Injectable, Input, OnInit, Output} from '@angular/core';
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

    liked(): object {
        console.log('adicionar like do feed item id: ' + this.item.id + ' para o usuário logado');
        return { status: true };
    }

    unliked(): object {
        console.log('remover like do feed item id: ' + this.item.id + ' do usuário logado');
        return { status: true };
    }
}
