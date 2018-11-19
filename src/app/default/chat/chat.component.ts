import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {PerfectScrollbarComponent} from 'ngx-perfect-scrollbar';

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, AfterViewInit {

    @ViewChild('ps') ps: PerfectScrollbarComponent;

    constructor() { }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.ps.directiveRef.scrollToBottom(0, 0);
    }
}
