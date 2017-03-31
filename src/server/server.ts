import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as morgan from 'morgan';
import * as cors from 'cors';
import * as compression from 'compression';
import { FilmDataRepository } from './film-data-repository';
import Film from './film';
import { RatingDataRepository } from './rating-data-repository';
import Rating from './rating';

const app = express();
const port = 4201;

// parse application/json and look for raw text
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: 'application/json'}));
app.use(bodyParser.text());

app.use(morgan('combined'));    // logs incoming requests
app.use(cors());                // allow all cors
app.use(compression());         // gzips response

const filmRepo = new FilmDataRepository();

app.route('/films/:id?')

  .get((req, res) => {
    res.json(filmRepo.get(req.params.id));
  })

  .post((req, res) => {
    const film = new Film();
    Object.assign(film, req.body as Film);
    const result = filmRepo.insert(film);
    res.json(result);
  })

  .put((req, res) => {
    const film = new Film();
    Object.assign(film, req.body as Film);
    const result = filmRepo.update(film);
    res.json(result);
  })

  .delete((req, res) => {
    filmRepo.delete(req.params.id) === 1
      ? res.json('Success')
      : res.json('Failed');
    }
  );

const ratingRepo = new RatingDataRepository();

app.route('/ratings/:id?')
  .get((req, res) => {
    res.send(ratingRepo.get(req.params.id));
   })

  .post((req, res) => {
    const rating = new Rating();
    Object.assign(rating, req.body as Rating);
    const result = ratingRepo.insert(rating);
    res.json(result);
  })

  .put((req, res) => {
    const rating = new Rating();
    Object.assign(rating, req.body as Rating);
    const result = ratingRepo.update(rating);
    res.json(result);
  })

  .delete((req, res) => {
    ratingRepo.delete(req.params.id) === 1
      ? res.send('Success')
      : res.send('Failed');
    }
  );

app.listen(port);
console.log('Listening on port ' + port);

module.exports = app;
