import * as _ from 'lodash';
import IDataRepository from './IDataRepository';
const data = require('./rating-data.json');
import Rating from './rating';

export class RatingDataRepository implements IDataRepository<Rating> {

  constructor() {}

  public get(id?: number): Rating|Array<Rating> {
    return id
      ? _.find(<Array<Rating>>data, Rating => Rating.id == id) as Rating
      : <Array<Rating>>data;
  };

  public insert(Rating: Rating): number {
    const RatingInRepo = _.find(<Array<Rating>>data, r => r.name == Rating.name) as Rating;
    if (RatingInRepo != null) {
      // throw new Error('Rating title already exists');
      return 0;
    }
    Rating.id = data.length + 1;
    (<Array<Rating>>data).push(Rating);
    return Rating.id;
  };

  public update(Rating: Rating) {
    const RatingInRepo = _.find(<Array<Rating>>data, f => f.id == Rating.id) as Rating;
    if (RatingInRepo == null) {
      // throw new Error('Rating not found');
      return 0;
    }
    _.merge(data, Rating);
    return 1;
  };

  public delete(Rating: Rating) {
    const RatingInRepo = _.find(<Array<Rating>>data, f => f.id == Rating.id) as Rating;
    if (RatingInRepo == null) {
      // throw new Error('Rating not found');
      return 0;
    }
    _.remove(<Array<Rating>>data, f => f.id == Rating.id);
    return 1;
  };
}