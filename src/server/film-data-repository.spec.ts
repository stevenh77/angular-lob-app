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
    it(`should insert a film and return an id`, async(() => {
      const film = new Film();
      film.title = 'dummy';
      const result = new FilmDataRepository().insert(film);
      expect(result).toBeGreaterThan(3);
    }));

    it(`should not insert a film if the title is not unique`, async(() => {
      const film = new Film();
      film.title = 'Fury';

      // couldn't get this working...
      // expect(new FilmDataRepository().insert(duplicateFilm)).toThrowError();
      const result = new FilmDataRepository().insert(film);
      expect(result).toBe(0);
    }));
  });

  describe('Update()', () => {
    it(`should update a film with a valid id`, async(() => {
      const film = new Film();
      film.id = 2;
      film.releaseDate = new Date(Date.now());
      const result = new FilmDataRepository().update(film);
      expect(result).toBe(1);
    }));

    it(`should not update a film with an invalid id`, async(() => {
      const film = new Film();
      film.id = 0;
      film.releaseDate = new Date(Date.now());
      const result = new FilmDataRepository().update(film);
      expect(result).toBe(0);
    }));
  });

  describe('Delete()', () => {
    it(`should delete a film with a valid id`, async(() => {
      const film = new Film();
      film.id = 2;
      const result = new FilmDataRepository().delete(film);
      expect(result).toBe(1);
    }));

    it(`should not delete a film with an invalid id`, async(() => {
      const film = new Film();
      film.id = 0;
      const result = new FilmDataRepository().delete(film);
      expect(result).toBe(0);
    }));
  });
});
