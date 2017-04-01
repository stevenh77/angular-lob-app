import * as _ from 'lodash';
import IDataRepository from '../IDataRepository';
import Rating from './rating';
const data: Array<Rating> = require('./rating-data.json');

export class RatingDataRepository implements IDataRepository<Rating> {

  constructor() {}

  public get(id?: number): Rating|Array<Rating> {
    return id
      ? _.find(data, Rating => Rating.id == id)
      : data;
  };

  public insert(rating: Rating): Rating {
    const ratingInRepo = _.find(data, r => r.name == rating.name);
    if (ratingInRepo != null) {
      // throw new Error('Rating title already exists');
      return null;
    }
    rating.id = data.length + 1;
    data.push(rating);
    return rating;
  };

  public update(rating: Rating) {
    const index = _.indexOf(data, _.find(data, r => r.id == rating.id));
    if (index === -1) {
      // throw new Error('Rating not found');
      return 0;
    }
    data.splice(index, 1, rating);
    return 1;
  };

  public delete(id: number) {
    const ratingInRepo = _.find(data, r => r.id == id);
    if (ratingInRepo == null) {
      // throw new Error('Rating not found');
      return 0;
    }
    _.remove(data, r => r.id == id);
    return 1;
  };
}
