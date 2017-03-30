import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as morgan from 'morgan';
import * as cors from 'cors';
import * as compression from 'compression';
import { FilmDataRepository } from './film-data-repository';
import { RatingDataRepository } from './rating-data-repository';

const app = express();
const port = 4201;

app.use(bodyParser.json());     // parse application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: 'application/json'}));
app.use(bodyParser.text());

app.use(morgan('combined'));    // logs incoming requests
app.use(cors());                // allow all cors
app.use(compression());         // gzips response

const filmRepo = new FilmDataRepository();

app.route('/films/:filmId?')
  .get((req, res) => { res.send(filmRepo.get(req.params.filmId)); });
  // .post((req, res) => { film.insert(); })
  // .put((req, res) => { film.update(); })
  // .delete((req, res) => { film.delete(); });

const ratingRepo = new RatingDataRepository();
app.route('/ratings/:ratingId?')
  .get((req, res) => { res.send(ratingRepo.get(req.params.ratingId)); });
  // .post((req, res) => { rating.insert(); })
  // .put((req, res) => { rating.update(); })
  // .delete((req, res) => { rating.delete(); });

app.listen(port);
console.log('Listening on port ' + port);

module.exports = app;
