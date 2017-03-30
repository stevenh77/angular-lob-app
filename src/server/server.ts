import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as morgan from 'morgan';
import * as cors from 'cors';
import * as compression from 'compression';
import Film from './film-data-repository';
import Rating from './rating-data-repository';

const app = express();
const port = 8080;

app.use(bodyParser.json());     // parse application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: 'application/json'}));
// app.use(bodyParser.text());

app.use(morgan('combined'));    // logs incoming requests
app.use(cors());                // allow all cors
app.use(compression());         // gzips response

const film = new Film();
app.route('/films')
  .get((req, res) => { film.get(); })
  // .post((req, res) => { film.insert(); })
  // .put((req, res) => { film.update(); })
  // .delete((req, res) => { film.delete(); });

const rating = new Rating();
app.route('/ratings')
  .get((req, res) => { rating.get(); })
  // .post((req, res) => { rating.insert(); })
  // .put((req, res) => { rating.update(); })
  // .delete((req, res) => { rating.delete(); });

app.listen(port);
console.log('Listening on port ' + port);

module.exports = app;