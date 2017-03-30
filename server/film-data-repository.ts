import * as _ from 'lodash';
import IDataRepository from './IDataRepository';
const data = require('./film-data.json');
import Film from './film';

export class FilmDataRepository implements IDataRepository<Film> {

  constructor() { }

  public get(id?: number): Film|Array<Film> {
    return id
      ? _.find(<Array<Film>>data, film => film.id == id) as Film
      : <Array<Film>>data;
  };

  public insert(film: Film) {
    return;
  };

  public update(film: Film) {
    return;
  };

  public delete(film: Film) {
    return;
  };
}
