import * as _ from 'lodash';
import IDataRepository from './IDataRepository';
const data = require('./rating-data.json');
import Rating from './rating';

export class RatingDataRepository implements IDataRepository<Rating> {

  constructor() { }

  public get(id?: number): Rating|Array<Rating> {
    return id
         ? _.find(<Array<Rating>>data, rating => rating.id == id) as Rating
         : <Array<Rating>>data;
  };

  public insert(rating: Rating) {
    return;
  };

  public update(rating: Rating) {
    return;
  };

  public delete(rating: Rating) {
    return;
  };
}
