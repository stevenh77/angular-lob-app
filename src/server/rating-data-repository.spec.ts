import { async } from '@angular/core/testing';
import { RatingDataRepository } from './rating-data-repository';
import Rating from './rating';

describe('RatingDataRepository', () => {
  beforeEach(async(() => {
      // nothing to set it yet
  }));

  describe('Get()', () => {
    it(`should return an array of ratings from a get with no parameter passed'`, async(() => {
      const result = new RatingDataRepository().get() as Array<Rating>;
      expect(result.length).toEqual(6);
    }));

    it(`should return a specfic rating from a get when id is passed'`, async(() => {
      const result = new RatingDataRepository().get(3) as Rating;
      expect(result.name).toEqual('12A');
    }));
  });

  describe('Insert()', () => {
    it(`should insert a rating and return a rating`, async(() => {
      const rating = new Rating();
      rating.name = 'XXX';
      const result = new RatingDataRepository().insert(rating);
      expect(result).toEqual(jasmine.any(Rating));
      expect(result.id).toEqual(7);
      expect(result.name).toEqual(rating.name);
    }));

    it(`should return null if inserting Rating with non unique name`, async(() => {
      const rating = new Rating();
      rating.name = '12A';

      // couldn't get this working...
      // expect(new DataRepository().insert(duplicate)).toThrowError();
      const result = new RatingDataRepository().insert(rating);
      expect(result).toBe(null);
    }));
  });

  describe('Update()', () => {
    it(`should update a rating with a valid id`, async(() => {
      const rating = new Rating();
      rating.id = 2;
      rating.name = 'XXX';
      const result = new RatingDataRepository().update(rating);
      expect(result).toBe(1);
    }));

    it(`should not update a rating with an invalid id`, async(() => {
      const rating = new Rating();
      rating.id = 0;
      rating.name = 'XXX';
      const result = new RatingDataRepository().update(rating);
      expect(result).toBe(0);
    }));
  });

  describe('Delete()', () => {
    it(`should delete a rating with a valid id`, async(() => {
      const result = new RatingDataRepository().delete(2);
      expect(result).toBe(1);
    }));

    it(`should not delete a rating with an invalid id`, async(() => {
      const result = new RatingDataRepository().delete(0);
      expect(result).toBe(0);
    }));
  });
});
