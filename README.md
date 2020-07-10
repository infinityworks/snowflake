![Build and Deploy](https://github.com/infinityworks/snowflake/workflows/Build%20and%20Deploy/badge.svg)

# InfinityWorks Core Skills Radar

IW Core Skills Radar is an adapted version of Medium's tool for planning and supporting our engineers' career development.

## Project structure
* `constants.js` contains all contents (roles, descriptions, examples, etc)
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

## CI/CD
There are two environments `production` available at https://career-radar.infinityworks.com and `dev` available at http://dev.career-radar.infinityworks.com. The `dev` environment can be considered as both both a UAT and staging environment.

When there is a push or merge into `master` the workflow [build-deploy](.github/workflows/build-deploy.yml) will be triggered with Github Actions. This builds and deploys a zip of the build to the bucket `builds.career-radar.infinityworks`.

AWS CodePipeline is used to extract the build and automatically deploy to the `dev` environment. A manual approval is then required to deploy to `production`. The pipeline is in the `iw-internal-it-dev` account along with the `dev` environment. For manual approval go to the AWS Management Console at [eu-west-1.console.aws.amazon.com/codesuite/codepipeline/pipelines](https://eu-west-1.console.aws.amazon.com/codesuite/codepipeline/pipelines) and select the `career-radar` pipeline. Navigate to the `Production` Stage and click `Review` for the first action in the stage. Then click `Approve` to push to `production` or `Reject` to cancel. Best to review the changes first by using the review url.

## Lambda
`./lambda` contains the function code for the feature off suggesting a new example.

### Setup
From the terminal `cd` into the lambda directory and run the the following commands:

```bash
mkdir package
```
Install the AWS SDK:

```bash
pip3 install --target ./package boto3
```
*Note to keep it simple for now there is no `requirements.txt` or a virtual environment. As the Lambda function evolves it would be better to explore setting up a `requirements.txt` or providing setup instructions for a virtual environment*.

### Deployment
The deployment for the lambda function is currently a manual process where the `zip` file for the lambda function is created locally and then manually uploaded to the `iw-dev-career-radar` function via the AWS Management Console.

For deployment, first ensure you are in the `lambda/` directory and run the following commands:

Navigate to `package/`:
```bash
cd package/
```
Zip packages:

```bash
zip -r9 ../function.zip .
```
Navigate back to `lambda/`:
```bash
cd ../
```
Add function code to zip:
```bash
zip -g function.zip lambda_function.py
```

After running the commands above a new file should exist in the `lambda/` directory called `function.zip`. This is the file that should be uploaded.
