import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ReactionsModel} from '../../models/ReactionsModel';

@Component({
    selector: 'app-reactions',
    templateUrl: './reactions.component.html',
    styleUrls: ['./reactions.component.scss']
})
export class ReactionsComponent implements OnInit {

    @Input() containerClass: string;
    @Input() data: ReactionsModel;
    @Input() parent: any;

    @ViewChild('optionsContainer') optionsContainer;
    private reactionSelected;

    constructor() { }

    ngOnInit() {
        this.optionsContainer = this.optionsContainer.nativeElement;

        if ( this.data.currentUserHasReacted !== null ) {
            this.reactionSelected = this.optionsContainer.getElementsByTagName('img')[this.data.currentUserHasReacted];
            this.reactionSelected.classList.add('active');
        }
    }

    reactionsText(): string {
        return ( this.data.total > 1 || this.data.total === 0 ) ? 'reações' : 'reação';
    }

    react(event, idx: number): void {

        let clicked = event.target;

        if ( this.data.currentUserHasReacted === null ) {

            clicked.classList.add('active');
            this.reactionSelected = clicked;
            this.data.currentUserHasReacted = idx;
            this.addLike();

        } else {
            this.reactionSelected.classList.remove('active');
            this.removeLike();

            if ( idx !== this.data.currentUserHasReacted ) {
                clicked.classList.add('active');
                this.reactionSelected = clicked;
                this.addLike();
            }
        }

    }

    private removeLike(): void {
        this.parent.unliked();
        /**
         * TODO - ajax para remover like
         */
    }

    private addLike(): void {
        this.parent.liked();
        /**
         * TODO - ajax para add like
         */
    }
}
