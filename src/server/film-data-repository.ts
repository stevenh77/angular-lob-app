import * as _ from 'lodash';
import IDataRepository from './IDataRepository';
const data = require('./film-data.json');
import Film from './film';

export class FilmDataRepository implements IDataRepository<Film> {

  constructor() {}

  public get(id?: number): Film|Array<Film> {
    return id
      ? _.find(<Array<Film>>data, film => film.id == id) as Film
      : <Array<Film>>data;
  };

  public insert(film: Film): number {
    const filmInRepo = _.find(<Array<Film>>data, f => f.title == film.title) as Film;
    if (filmInRepo != null) {
      // throw new Error('Film title already exists');
      return 0;
    }
    film.id = data.length + 1;
    (<Array<Film>>data).push(film);
    return film.id;
  };

  public update(film: Film) {
    const filmInRepo = _.find(<Array<Film>>data, f => f.id == film.id) as Film;
    if (filmInRepo == null) {
      // throw new Error('Film not found');
      return 0;
    }
    _.merge(data, film);
    return 1;
  };

  public delete(film: Film) {
    const filmInRepo = _.find(<Array<Film>>data, f => f.id == film.id) as Film;
    if (filmInRepo == null) {
      // throw new Error('Film not found');
      return 0;
    }
    _.remove(<Array<Film>>data, f => f.id == film.id);
    return 1;
  };
}
