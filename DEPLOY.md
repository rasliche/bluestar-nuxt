# Deployment Instructions

This document contains instructions for deploying `bluestar-nuxt` to Heroku and Netlify.

## Step 1: Heroku

1. Login to Heroku and create a new pipeline and connect the pipeline the GitHub repository.
2. Create a staging app and a production app.
3. Configure the following config vars in each app's settings:
   - `ADMIN_REGISTER_PASSWORD`: The admin password
   - `CLIENT_URL`: The URL of the Netlify app or `*` for any URL
   - `MONGO_URI`: The MongoDB [connection string](https://docs.mongodb.com/manual/reference/connection-string/)
   - `PROJECT_PATH`: The directory the server is in. Set this to `server`
4. Add the following buildpacks to each app:
   - `https://github.com/timanovsky/subdir-heroku-buildpack`
   - `heroku/nodejs`
5. Back in the pipeline settings, configure automatic deploys for the staging app
   - Optional: configure automatic deploys for the production app
6. Either push changes to GitHub or use the Heroku CLI to push the server to Heroku

## Step 2: Netlify

1. Login to Netlify and create a new site from git:
   - Set *build command* to `npm run generate`
   - Set *publish directory* to `dist`
   - In advanced build settings, add an environment variable called `BASE_URL` and set it to `<heroku production app url>`
2. In *build & deploy* settings:
   - In *deploy contexts*, set branch deploys to `All`
     - Or select `Let me add individual branches` and configure only the branches you want (master and staging, for example)
     - **NOTE**: You may need to push changes to get Netlify to build a branch.
3. In *identity* settings:
   - Enable Netlify Identity
   - In *Registration*, set `Registration` to `Invite only`
   - In *Services*, enable `Git Gateway`
