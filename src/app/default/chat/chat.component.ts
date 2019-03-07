import {AfterViewInit, Component, ElementRef, Injectable, OnInit, ViewChild} from '@angular/core';
import {PerfectScrollbarComponent} from 'ngx-perfect-scrollbar'
import * as $ from 'jquery';
import {MatIcon} from '@angular/material';
import * as socket from 'socket.io-client';
import {HomeComponent} from '../../modules/home/home.component';
import {SocketPrivateChatService} from '../../socket-private-chat.service';

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.scss'],
    providers: [
        { provide: SocketPrivateChatService, useValue: 'uma nova instância' }
    ]
})

// @Injectable()
export class ChatComponent implements OnInit, AfterViewInit {

    @ViewChild('ps') ps: PerfectScrollbarComponent;
    @ViewChild('screen') screen: ElementRef;
    @ViewChild('close') close: MatIcon;
    private chatsSocket: SocketIOClient.Socket;
    private meID: number;

    constructor(
        public socketPrivateChatService: SocketPrivateChatService
    ) { }

    ngOnInit() {
        // this.connectSocket()
        setTimeout( () => {
            console.log('\n chat initialized');
            // console.log(this.socketPrivateChatService);
        }, 1000);
        // this.sendMessage();
    }

    ngAfterViewInit() {
        this.ps.directiveRef.scrollToBottom(0, 0);

        console.log(this.close._elementRef.nativeElement)

        $(this.close._elementRef.nativeElement).on('click', () => {
            const screen = this.screen.nativeElement;
            $(screen).animate({ right: (screen.clientWidth * -1) });
        });
    }

    sendMessage(): void {
        // alert(HomeComponent.socketID);
        // this.connectSocket(HomeComponent.socketID);
        //
        // // Fake current user id
        // this.meID = ( HomeComponent.socketID === 1 ) ? 2 : 1;
        //
        // this._send();
        // console.log(this.socketPrivateChatService.myRoom);
        // socketPri
    }

    private _send(): void {
        this.chatsSocket.emit('message', {
            message: 'Hello userid ' + HomeComponent.socketID + 'from ' + this.meID,
            from: this.meID,
            to: HomeComponent.socketID
        });
    }
}
