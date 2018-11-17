import {Component, EventEmitter, Injectable, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FeedItemModel} from '../../../models/FeedItem.model';

import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material';
import {SwiperDialogComponent} from '../../swiper-dialog/swiper-dialog.component';

@Component({
    selector: 'app-feed-item',
    templateUrl: './feed-item.component.html',
    styleUrls: [
        './feed-item.component.scss',
        '../../assets/flexbin-master/flexbin.scss',
    ]
})

@Injectable()
export class FeedItemComponent implements OnInit {

    @Input() item: FeedItemModel;
    private bgImage: string;

    constructor(public dialog: MatDialog) { }

    ngOnInit() {
        this.bgImage = `url(${this.item.image})`;
    }

    openSwiper() {
        const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        dialogConfig.data = this.item.media;
        // dialogConfig.closeOnNavigation = true;

        this.dialog.open(SwiperDialogComponent, dialogConfig);
    }

    isLastGalleryItem(currentIdx, total) {
        return currentIdx === total;
    }

    hasMoreItems() {
        return this.item.media.total > this.item.media.previews.length;
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
