import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {PerfectScrollbarComponent} from 'ngx-perfect-scrollbar'
import * as $ from 'jquery';
import {MatIcon} from '@angular/material';

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, AfterViewInit {

    @ViewChild('ps') ps: PerfectScrollbarComponent;
    @ViewChild('screen') screen: ElementRef;
    @ViewChild('close') close: MatIcon;

    constructor() { }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.ps.directiveRef.scrollToBottom(0, 0);

        console.log(this.close._elementRef.nativeElement)

        $(this.close._elementRef.nativeElement).on('click', () => {
            const screen = this.screen.nativeElement;
            $(screen).animate({ right: (screen.clientWidth * -1) });
        });
    }
}
