import Rating from './rating';

export default class Film {
    id: number;
    title: string;
    imageUrl: string;
    releaseDate: string;    // dateTime
    rating: Rating;
    length: number;
    actors: Array<{ name: string }>;
}
