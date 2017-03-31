import Rating from '../Rating/rating';

export default class Film {
    id?: number;
    title: string;
    imageUrl: string;
    releaseDate: Date;
    rating: Rating;
    length: number;
    actors: Array<{ name: string }>;
}
