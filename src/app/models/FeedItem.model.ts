import {Model} from './Model';
import {FeedCommentModel} from './FeedComment.model';
import {ReactionsModel} from './ReactionsModel';

export class FeedItemModel extends Model {
    constructor(
        public id: number,
        public image: string,
        public title: { link: string, text: string },
        public content: string,
        public datetime: Date,
        public reactions: ReactionsModel,
        public comments: Array<FeedCommentModel>
    ) {
        super();
    }
}
