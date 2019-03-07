import {Component, Injectable} from '@angular/core';
import * as socket from 'socket.io-client';
import {SocketPrivateChatService} from './socket-private-chat.service';
// import 'socket.io';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [
        './app.component.css'
    ],
    // providers: [SocketPrivateChatService]
})

// @Injectable()
export class AppComponent {
    constructor(
        // public socketPrivateChatService: SocketPrivateChatService
    ) {

        // setTimeout(() => {
        //     console.log('emmitng after 1s');
        //     chatsSocket.emit('hello', 'hello chat!');
        // }, 3000);
        // this.socketPrivateChatService.connectRoom(1);
    }
}
