import {Component, Inject, Injectable, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import Swiper from 'swiper';

@Component({
    selector: 'app-swiper-dialog',
    templateUrl: './swiper-dialog.component.html',
    styleUrls: [
        './swiper-dialog.component.scss',
        '../../../../node_modules/swiper/dist/css/swiper.css'
    ]
})

// @Injectable()
export class SwiperDialogComponent implements OnInit {
    // private items: Array<{ type: string; src: string }>;
    private items: Array<any>;

    // constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
    constructor(
        @Inject(MAT_DIALOG_DATA) public  data
    ) {
        this.items = data.previews;
    }

    ngOnInit() {
        console.log(this.data);
        setTimeout(function () {
            new Swiper('.swiper-container', {
                // Optional parameters
                direction: 'horizontal',
                // loop: true,

                // If we need pagination
                pagination: {
                    el: '.swiper-pagination',
                },

                // Navigation arrows
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },

                // And if we need scrollbar
                // scrollbar: {
                //     el: '.swiper-scrollbar',
                // },
            });
        }, 300);

    }

}
