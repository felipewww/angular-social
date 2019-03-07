import {Component, Injectable, OnInit} from '@angular/core';
import {FeedItemModel} from '../../models/FeedItem.model';
import {FeedItemService} from '../../shared/feed/feed-item/feed-item.service';
import {SocketPrivateChatService} from '../../socket-private-chat.service';

@Component({
    selector: 'app-page',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})

@Injectable()
export class HomeComponent implements OnInit {
    public static socketID: number;

    private posts: Array<FeedItemModel>;
    private me: any;
    private myRoom: SocketIOClient.Socket;
    // private myRoom: void;

    constructor(
        private feedItemService: FeedItemService
        // , private socketPrivateChatService: SocketPrivateChatService
    ) { }


    ngOnInit() {
        this.posts = this.feedItemService.items();
        // this.socketPrivateChatService.setTeste('novo teste');
        console.log('this.socketPrivateChatService.myRoom');
        // console.log(this.socketPrivateChatService);
    }

    connectSocket(n): void {
        // console.log(this.socketPrivateChatService);
    }

    connectMe(id): void {
        // this.socketPrivateChatService.setTeste('opa!');
        // console.log(this.socketPrivateChatService);
    }
}
