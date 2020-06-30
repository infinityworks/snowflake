![Build and Deploy](https://github.com/infinityworks/snowflake/workflows/Build%20and%20Deploy/badge.svg)

# InfinityWorks Core Skills Radar

IW Core Skills Radar is an adapted version of Medium's tool for planning and supporting our engineers' career development.

## Project structure
* `constants.js` contains all contents (roles, descrpitions, examples, etc)
* `/static/css/main/core.css` contains the main IW website css, but there are inline CSS snippets in the component. Not too nice

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

## Contributing
When adding a new feature checkout a new branch from `master` with the name `feature/<branch>`. This ensures the workflow [build](.github/workflows/build.yml) will trigger a test build of your branch when pushed.

## Environments
There are two environments `production` available at http://radar.career.infinityworks.com and `test` available at http://test.radar.career.infinityworks.com. When a push or merge into `master` the workflow [build-deploy](.github/workflows/build-deploy.yml) will be triggered on Github. This builds and deploys to the `test` environment.
