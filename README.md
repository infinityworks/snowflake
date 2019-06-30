# IW Snowflake

IW Snowflake is an adapted version of Medium's tool for planning and supporting our engineers' career development.

## Project structure
* `constants.js` contains all contents (roles, descrpitions, examples, etc)
* `/static/css/main/core.css` contains the main IW website css, but there are inline CSS snippets in the component. Not too nice

## TODOs

* Set up static S3 site hosting on IW's account
* Set up CI/CD
* Fix mobile view (CSS)
* Write remaining content (all missing instances are marked with `// TODO`)
* Load initial data from a file, to improve flexibility

## Installation

Get yarn if you don’t have it already:

`npm install -g yarn`

Install dependencies:

`yarn`

### Running the dev server

`yarn dev`

### Building

`yarn export`

This will put a static version of the site in `out/`.
