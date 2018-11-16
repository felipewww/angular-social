import {Component, Input, OnInit} from '@angular/core';
import {FeedCommentModel} from '../../../models/FeedComment.model';

@Component({
    selector: 'app-comment-view',
    templateUrl: './comment-view.component.html',
    styleUrls: ['./comment-view.component.scss']
})
export class CommentViewComponent implements OnInit {

    @Input() type: string;
    @Input() comment: FeedCommentModel;

    private userPhoto: string;

    constructor() {
    }

    ngOnInit() {
        this.userPhoto = `url(${this.comment.user.photo})`;
    }

    isParent() {
        return this.type === 'parent';
    }

    setBoxClass(): string{
        if (this.isParent()){
            return 'a-comment';
        } else {
            return 'a-answer';
        }
    }

    answersText(): string {
        return ( this.comment.answers.length > 1 ) ? 'respostas' : 'resposta';
    }

    liked(): object {
        console.log('adicionar like do comentário id: ' + this.comment.id + ' para o usuário logado');
        return { status: true };
    }

    unliked(): object {
        console.log('remover like do comentário id: ' + this.comment.id + ' do usuário logado');
        return { status: true };
    }
}
