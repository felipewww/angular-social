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

    // @ViewChild('swiperContainer') swiperContainer;

    // constructor(feedItemService: FeedItemService) { }
    // constructor(public dialogRef: MatDialogRef<SwiperDialogComponent>) { }
    constructor(public dialog: MatDialog) { }
    // constructor() { }

    ngOnInit() {
        this.bgImage = `url(${this.item.image})`;

        // let swiperSlider = new Swiper(this.swiperContainer.nativeElement);
        // let swiperSlider = new Swiper(this.swiperContainer.nativeElement);
        // let mySwiper = new Swiper ('.swiper-container', {
        //     // Optional parameters
        //     direction: 'vertical',
        //     loop: true,
        //
        //     // If we need pagination
        //     pagination: {
        //         el: '.swiper-pagination',
        //     },
        //
        //     // Navigation arrows
        //     navigation: {
        //         nextEl: '.swiper-button-next',
        //         prevEl: '.swiper-button-prev',
        //     },
        //
        //     // And if we need scrollbar
        //     scrollbar: {
        //         el: '.swiper-scrollbar',
        //     },
        // });
    }

    openSwiper(){
        const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        dialogConfig.data = this.item.media;
        // dialogConfig.closeOnNavigation = true;

        this.dialog.open(SwiperDialogComponent, dialogConfig);
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
