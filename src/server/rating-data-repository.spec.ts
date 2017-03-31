import { async } from '@angular/core/testing';
import { RatingDataRepository } from './rating-data-repository';
import Rating from './rating';

describe('RatingDataRepository', () => {
  beforeEach(async(() => {
      // nothing to set it yet
  }));

  it(`should return an array of ratings from a get with no parameter passed'`, async(() => {
    const result = new RatingDataRepository().get() as Array<Rating>;
    expect(result.length).toEqual(6);
  }));

  it(`should return a specfic rating from a get when id is passed'`, async(() => {
    const result = new RatingDataRepository().get(2) as Rating;
    expect(result.name).toEqual('PG');
  }));
});
