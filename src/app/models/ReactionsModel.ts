import {Model} from './Model';

export class ReactionsModel extends Model {
    constructor(
        public smileys: {},
        public total: number,
        public currentUserHasReacted: number
    ) {
        super();
    }
}
