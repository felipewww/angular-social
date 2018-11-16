import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-page',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    private posts: Array<any>;

    constructor() { }

    ngOnInit() {
        this.posts = this.fakePosts();
    }

    switchFeedReadType(e, centerBox){

        let currentType = e.target.innerHTML;

        if ( currentType === 'fullscreen' ) {
            e.target.innerHTML = 'fullscreen_exit';
            centerBox.classList.remove('col-center');
        } else {
            e.target.innerHTML = 'fullscreen';
            centerBox.classList.add('col-center');
        }
    }

    fakePosts(): Array<any> {
        let posts = [
            {
                group: { id: 1, name: 'The fake group' },
                content: 'Letterpress plaid helvetica cardigan snackwave. Church-key pickled trust fund, hot chicken bushwick XOXO cronut. Tumblr cloud bread salvia 90\'s stumptown, pop-up listicle scenester wolf vegan dreamcatcher raclette. Shoreditch blog hella, echo park VHS small batch synth tacos listicle bushwick adaptogen pop-up biodiesel microdosing. Food truck stumptown austin plaid chicharrones typewriter. Kickstarter you probably haven\'t heard of them meggings, banh mi cornhole photo booth blue bottle. Blog deep v live-edge snackwave synth vegan.',
                reactions: {
                    emoji: {
                        happy: {},
                        emoji: {},
                        thinking: {},
                        sad: {},
                        angry: {},
                        crying: {},
                    },
                    total: 83
                },
                comments: [
                    {
                        user: { id: 1, name: 'Jhon Doe' },
                        comment: 'Some fake comment...',
                        answers: [
                            {
                                user: { id: 1, name: 'Jhon Doe' },
                                comment: 'Some fake answer...'
                            }
                        ]
                    }
                ],
            },
            {
                group: { id: 1, name: 'The fake group' },
                content: 'Letterpress plaid helvetica cardigan snackwave. Church-key pickled trust fund, hot chicken bushwick XOXO cronut. Tumblr cloud bread salvia 90\'s stumptown, pop-up listicle scenester wolf vegan dreamcatcher raclette. Shoreditch blog hella, echo park VHS small batch synth tacos listicle bushwick adaptogen pop-up biodiesel microdosing. Food truck stumptown austin plaid chicharrones typewriter. Kickstarter you probably haven\'t heard of them meggings, banh mi cornhole photo booth blue bottle. Blog deep v live-edge snackwave synth vegan.',
                reactions: {
                    emoji: {
                        happy: {},
                        emoji: {},
                        thinking: {},
                        sad: {},
                        angry: {},
                        crying: {},
                    },
                    total: 83
                },
                comments: [
                    {
                        user: { id: 1, name: 'Jhon Doe' },
                        comment: 'Some fake comment...',
                        answers: [
                            {
                                user: { id: 1, name: 'Jhon Doe' },
                                comment: 'Some fake answer...'
                            }
                        ]
                    }
                ],
            }
        ];

        return posts;
    }
}
