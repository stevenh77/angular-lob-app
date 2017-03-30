import { async } from '@angular/core/testing';
import FilmDataRepository from './film-data-repository';
import Film from './film';

describe('FilmDataRepository', () => {
  beforeEach(async(() => {
      // nothing to set it yet
  }));

  it(`should return an array of films from a get with no parameter passed'`, async(() => {
    const result = new FilmDataRepository().get() as Array<Film>;
    console.log(result.length);
    expect(result.length).toEqual(3);
  }));

  it(`should return a specfic film from a get when id is passed'`, async(() => {
    const result = new FilmDataRepository().get(3) as Film;
    console.log(result.title);
    expect(result.title).toEqual('The Theory of Everything');
  }));
});
