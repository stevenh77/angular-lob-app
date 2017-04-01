# AngularLobApp

[![Dependency Status](https://david-dm.org/stevenh77/angular-lob-app.svg)](https://david-dm.org/stevenh77/angular-lob-app)
[![devDependency Status](https://david-dm.org/stevenh77/angular-lob-app/dev-status.svg)](https://david-dm.org/stevenh77/angular-lob-app#info=devDependencies)
[![GitHub version](https://badge.fury.io/gh/stevenh77%2Fangular-lob-app.svg)](https://badge.fury.io/gh/stevenh77%2Fangular-lob-app)
[![Build Status](https://travis-ci.org/stevenh77/angular-lob-app.svg?branch=master)](https://travis-ci.org/stevenh77/angular-lob-app)
[![Open Source Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)

An example line of business app written in Angular2 with TypeScript.

* Auth0 integation
* Server with simple REST API using backend Json data files
* Data Repository pattern using interfaces with generics 
* Bootstrap styling
* Unit tests using Karma, Jasmine and PhantomJS
* e2e tests using Protractor
* Web REST api tests using ts-node, child-process and Jasmine
* Continuous integration with Travis
* Bundling and AOT with WebPack
* TypeScript with TSLint and Typings
* WallabyJS

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## API server

Run `ts-node src/server/server.ts` for the API server.  Navigate to `http://localhost:4201/films'.

To test, run `cd src/server` then `jasmine`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## To test unit, e2e and api

Run `npm test`.