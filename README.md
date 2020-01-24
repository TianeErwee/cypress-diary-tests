# Cypress Diary Tests Repository

## Why?

This repository contains the Cypress tests for a small Diary application showing how you can achieve coverage on e2e tests for both frontend and backend in one report. The other two repositories required to run the demo are the [Angular Frontend](https://github.com/TianeErwee/cypress-diary-app) and the [Node.js Backend](https://github.com/TianeErwee/cypress-diary-api).

## Getting Started

#### Pre-requisites
This example works with a mysql database so ensure that you have the following:
* mysql installed globally
* a mysql client installed e.g. [MySQLWorkbench](https://www.mysql.com/products/workbench/)

This example requires that you have the following installed globally:
* npm
* @angular/cli
I suggest you use nvm, you can find a good tutorial [here](https://www.sitepoint.com/quick-tip-multiple-versions-node-nvm/)

#### Get the repository
Clone this repository
Run the `npm install` command

Inside of this repository clone the following:
[Angular Frontend](https://github.com/TianeErwee/cypress-diary-app)
[Node.js Backend](https://github.com/TianeErwee/cypress-diary-api)

Your local structure should now look like this:
- cypress-diary-tests
  - cypress
  - cypress-diary-app
  - cypress-diary-api
  - node_modules
  - ...

## Running the tests

First, follow the instructions in the readme's for the frontend and backend.
To run the e2e tests and generate coverage report you can run `npm run test:coverage`
Go to:
- coverage
  - lcov-report
And open index.html in your browser.