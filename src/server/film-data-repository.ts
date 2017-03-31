import * as _ from 'lodash';
import IDataRepository from './IDataRepository';
import Film from './film';
const data: Array<Film> = require('./film-data.json');

export class FilmDataRepository implements IDataRepository<Film> {

  constructor() {}

  public get(id?: number): Film|Array<Film> {
    return id
      ? _.find(data, film => film.id == id)
      : data;
  };

  public insert(film: Film): Film {
    const filmInRepo = _.find(data, f => f.title == film.title);
    if (filmInRepo != null) {
      // throw new Error('Film title already exists');
      return null;
    }
    film.id = data.length + 1;
    data.push(film);
    return film;
  };

  public update(film: Film) {
     const index = _.indexOf(data, _.find(data, f => f.id == film.id));
    if (index === -1) {
      // throw new Error('Film not found');
      return 0;
    }
    data.splice(index, 1, film);
    return 1;
  };

  public delete(id: number) {
    const filmInRepo = _.find(data, f => f.id == id);
    if (filmInRepo == null) {
      // throw new Error('Film not found');
      return 0;
    }
    _.remove(data, f => f.id == id);
    return 1;
  };
}
