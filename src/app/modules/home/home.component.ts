import { Component, OnInit } from '@angular/core';
import {FeedItemModel} from '../../models/FeedItem.model';
import {ReactionsModel} from '../../models/ReactionsModel';
import {FeedCommentModel} from '../../models/FeedComment.model';

@Component({
    selector: 'app-page',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    private posts: Array<FeedItemModel>;

    constructor() { }

    ngOnInit() {
        this.posts = this.fakePosts();
    }

    switchFeedReadType(e, centerBox): void{

        if ( e.target.innerHTML === 'fullscreen' ) {
            e.target.innerHTML = 'fullscreen_exit';
            centerBox.classList.remove('col-center');
        } else {
            e.target.innerHTML = 'fullscreen';
            centerBox.classList.add('col-center');
        }
    }

    fakePosts(): Array<FeedItemModel> {
        let posts = [
            {
                group: { id: 1, name: 'The fake group', icon: '/assets/media/images/3.jpeg' },
                content: 'Letterpress plaid helvetica cardigan snackwave. Church-key pickled trust fund, hot chicken bushwick XOXO cronut. Tumblr cloud bread salvia 90\'s stumptown, pop-up listicle scenester wolf vegan dreamcatcher raclette. Shoreditch blog hella, echo park VHS small batch synth tacos listicle bushwick adaptogen pop-up biodiesel microdosing. Food truck stumptown austin plaid chicharrones typewriter. Kickstarter you probably haven\'t heard of them meggings, banh mi cornhole photo booth blue bottle. Blog deep v live-edge snackwave synth vegan.',
                reactions: {
                    smileys: {
                        happy: {},
                        emoji: {},
                        thinking: {},
                        sad: {},
                        angry: {},
                        crying: {},
                    },
                    total: 1
                },
                comments: [
                    {
                        user: { id: 1, name: 'Jhon Doe', photo: '/assets/media/images/people/pexels-photo-1239291.jpeg' },
                        comment: 'Some fake comment 1...',
                        reactions: {
                            smileys: {
                                happy: {},
                                emoji: {},
                                thinking: {},
                                sad: {},
                                angry: {},
                                crying: {},
                            },
                            total: 15
                        },
                        answers: [
                            {
                                user: { id: 1, name: 'Jhon Doe', photo: '/assets/media/images/people/pexels-photo-1239291.jpeg' },
                                comment: '111111111 Some fake answer...',
                                reactions: {
                                    smileys: {},
                                    total: 0
                                }
                            }
                        ]
                    },
                    {
                        user: { id: 1, name: 'Jhon Doe', photo: '/assets/media/images/people/pexels-photo-1239291.jpeg' },
                        comment: 'Comment without answer',
                        reactions: {
                            smileys: {
                                happy: {},
                                emoji: {},
                                thinking: {},
                                sad: {},
                                angry: {},
                                crying: {},
                            },
                            total: 15
                        },
                        answers: []
                    }
                ],
            },
            /**
             * OTHER FEED ITEM
             * */
            {
                group: { id: 1, name: 'Group 2', icon: '/assets/media/images/1.jpeg' },
                content: 'Another little content!',
                reactions: {
                    smileys: {
                        happy: {},
                        emoji: {},
                        thinking: {},
                        sad: {},
                        angry: {},
                        crying: {},
                    },
                    total: 3
                },
                comments: [
                    {
                        user: { id: 1, name: 'Jhon Doe', photo: '/assets/media/images/people/pexels-photo-1239291.jpeg' },
                        comment: 'Some fake comment 2...',
                        reactions: {
                            smileys: {
                                happy: {},
                                emoji: {},
                                thinking: {},
                                sad: {},
                                angry: {},
                                crying: {},
                            },
                            total: 15
                        },
                        answers: [
                            {
                                user: { id: 1, name: 'Jhon Doe', photo: '/assets/media/images/people/pexels-photo-762020.jpeg' },
                                comment: '22222222222222 Some fake answer...',
                                reactions: {
                                    smileys: {},
                                    total: 3
                                }
                            },
                            {
                                user: { id: 1, name: 'Jhon Doe', photo: '/assets/media/images/people/pexels-photo-762020.jpeg' },
                                comment: 'other fake answer',
                                reactions: {
                                    smileys: {},
                                    total: 5
                                }
                            }
                        ]
                    },
                ],
            }
        ];

        let arr: Array<FeedItemModel> = [];

        for (let post of posts) {
            let link = '#' + post.group.id + '/thegrouptreatnedname';

            let reactions = new ReactionsModel(post.reactions.smileys, post.reactions.total);

            let user = {
                id: 1,
                name: 'Nome Teste',
                photo: '/assets/media/images/people/pexels-photo-1239291.jpeg'
            };

            const comments: Array<FeedCommentModel> = [];
            for (let commentParent of post.comments) {

                const answers: Array<FeedCommentModel> = [];

                for (const answer of commentParent.answers) {
                    answers.push(
                        new FeedCommentModel(
                            answer.comment,
                            { id: answer.user.id, name: answer.user.name, photo: answer.user.photo },
                            null,
                            new ReactionsModel(answer.reactions.smileys, answer.reactions.total)
                        )
                    );
                }

                let c = new FeedCommentModel(
                    commentParent.comment,
                    { id: commentParent.user.id, name: commentParent.user.name, photo: commentParent.user.photo },
                    answers,
                    new ReactionsModel(commentParent.reactions.smileys, commentParent.reactions.total)
                );
                comments.push(c);
            }

            arr.push(
                new FeedItemModel(
                    post.group.icon,
                    { link: link, text: post.group.name },
                    post.content,
                    new Date(),
                    reactions,
                    comments
                )
                    // [fakeComment]
            );
        }

        return arr;
        // return posts;
    }
}
