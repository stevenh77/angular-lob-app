import { async } from '@angular/core/testing';
import { FilmDataRepository } from './film-data-repository';
import Film from './film';

describe('FilmDataRepository', () => {
  describe('Get()', () => {
    it(`should return an array of films from a get with no parameter passed'`, async(() => {
      const result = new FilmDataRepository().get() as Array<Film>;
      expect(result.length).toEqual(3);
    }));

    it(`should return a specfic film from a get when id is passed'`, async(() => {
      const result = new FilmDataRepository().get(3) as Film;
      expect(result.title).toEqual('The Theory of Everything');
    }));
  });

  describe('Insert()', () => {
    it(`should insert a film and return a film with id 4`, async(() => {
      const film = new Film();
      film.title = 'new title';
      const result = new FilmDataRepository().insert(film);

      expect(result).toEqual(jasmine.any(Film));
      expect(result.id).toEqual(4);
      expect(result.title).toEqual(film.title);
    }));

    it(`should return null if inserting film with non unique title`, async(() => {
      const film = new Film();
      film.title = 'Fury';

      // couldn't get this working...
      // expect(new DataRepository().insert(duplicate)).toThrowError();
      const result = new FilmDataRepository().insert(film);
      expect(result).toBe(null);
    }));
  });

  describe('Update()', () => {
    it(`should update a film with a valid id`, async(() => {
      const film = new Film();
      film.id = 2;
      film.title = 'updated';
      const result = new FilmDataRepository().update(film);
      expect(result).toBe(1);
    }));

    it(`should not update a film with an invalid id`, async(() => {
      const film = new Film();
      film.id = 0;
      film.title = 'not updated';
      const result = new FilmDataRepository().update(film);
      expect(result).toBe(0);
    }));
  });

  describe('Delete()', () => {
    it(`should delete a film with a valid id`, async(() => {
      const result = new FilmDataRepository().delete(2);
      expect(result).toBe(1);
    }));

    it(`should not delete a rating with an invalid id`, async(() => {
      const result = new FilmDataRepository().delete(0);
      expect(result).toBe(0);
    }));
  });
});
