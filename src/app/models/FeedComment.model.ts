import {Model} from './Model';
import {ReactionsModel} from './ReactionsModel';

export class FeedCommentModel extends Model {
    constructor(
        public id: number,
        public comment: string,
        public user: { id: number, name: string, photo: string },
        public answers: Array<FeedCommentModel|null>,
        public reactions: ReactionsModel,
    ) {
        super();
    }
}
