import { Injectable } from '@angular/core';
import {FeedItemModel} from '../../../models/FeedItem.model';
import {ReactionsModel} from '../../../models/ReactionsModel';
import {FeedCommentModel} from '../../../models/FeedComment.model';

@Injectable({
    providedIn: 'root'
})
export class FeedItemService {

    constructor() { }

    public switchFeedReadType(e, centerBox): void {
        if ( e.target.innerHTML === 'fullscreen' ) {
            e.target.innerHTML = 'fullscreen_exit';
            centerBox.classList.remove('col-center');
        } else {
            e.target.innerHTML = 'fullscreen';
            centerBox.classList.add('col-center');
        }
    }

    public items(): Array<FeedItemModel> {
        let posts = [
            {
                id: 17,
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
                    currentUserReacted: 0,
                    total: 1
                },
                /* Limitar em 6 fotos, deve sempre trazer numero PAR, 2, 4, 6... */
                media: {
                    previews: [
                        // { type: 'image', src: '/assets/media/images/10.jpeg' },
                        { type: 'image', src: '/assets/media/images/10.jpeg' },
                        // { type: 'image', src: '/assets/media/images/1.jpeg' },
                        { type: 'image', src: '/assets/media/images/2.jpeg' },
                        { type: 'image', src: '/assets/media/images/3.jpeg' },
                        { type: 'image', src: '/assets/media/images/5.jpeg' },
                        { type: 'image', src: '/assets/media/images/6.jpeg' },
                        { type: 'image', src: '/assets/media/images/7.jpeg' },
                    ],
                    total: 17
                },
                comments: [
                    {
                        id: 4,
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
                            currentUserReacted: 1,
                            total: 15
                        },
                        answers: [
                            {
                                id: 5,
                                user: { id: 1, name: 'Jhon Doe', photo: '/assets/media/images/people/pexels-photo-1239291.jpeg' },
                                comment: '111111111 Some fake answer...',
                                reactions: {
                                    smileys: {},
                                    currentUserReacted: null,
                                    total: 0
                                }
                            }
                        ]
                    },
                    {
                        id: 6,
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
                            currentUserReacted: null,
                            total: 15
                        },
                        answers: []
                    }
                ],
                totalComments: 82,
            },
            /**
             * OTHER FEED ITEM
             * */
            {
                id: 30,
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
                    currentUserReacted: null,
                    total: 3
                },
                media: {
                    total: 0,
                    previews: []
                },
                comments: [
                    {
                        id: 1,
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
                            currentUserReacted: null,
                            total: 15
                        },
                        answers: [
                            {
                                id: 2,
                                user: { id: 1, name: 'Jhon Doe', photo: '/assets/media/images/people/pexels-photo-762020.jpeg' },
                                comment: '22222222222222 Some fake answer...',
                                reactions: {
                                    smileys: {},
                                    currentUserReacted: null,
                                    total: 3
                                }
                            },
                            {
                                id: 3,
                                user: { id: 1, name: 'Jhon Doe', photo: '/assets/media/images/people/pexels-photo-762020.jpeg' },
                                comment: 'other fake answer',
                                reactions: {
                                    smileys: {},
                                    currentUserReacted: null,
                                    total: 5
                                }
                            }
                        ]
                    },
                ],
                totalComments: 17
            }
        ];

        let arr: Array<FeedItemModel> = [];

        for (let post of posts) {
            const link = '#' + post.group.id + '/thegrouptreatnedname';

            const reactions = new ReactionsModel(post.reactions.smileys, post.reactions.total, post.reactions.currentUserReacted);

            const comments: Array<FeedCommentModel> = [];
            for (let commentParent of post.comments) {

                const answers: Array<FeedCommentModel> = [];

                for (const answer of commentParent.answers) {
                    answers.push(
                        new FeedCommentModel(
                            answer.id,
                            answer.comment,
                            { id: answer.user.id, name: answer.user.name, photo: answer.user.photo },
                            null,
                            new ReactionsModel(answer.reactions.smileys, answer.reactions.total, answer.reactions.currentUserReacted)
                        )
                    );
                }

                let c = new FeedCommentModel(
                    commentParent.id,
                    commentParent.comment,
                    { id: commentParent.user.id, name: commentParent.user.name, photo: commentParent.user.photo },
                    answers,
                    new ReactionsModel(
                        commentParent.reactions.smileys,
                        commentParent.reactions.total,
                        commentParent.reactions.currentUserReacted)
                );
                comments.push(c);
            }

            arr.push(
                new FeedItemModel(
                    post.id,
                    post.group.icon,
                    { link: link, text: post.group.name },
                    post.content,
                    new Date(),
                    reactions,
                    comments,
                    post.totalComments,
                    post.media
                )
            );
        }

        console.log('fulldata');
        console.log(arr);

        return arr;
        // return posts;
    }
}
