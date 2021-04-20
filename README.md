# Blue Star Online Training

This is the online training platform for the FKNMS Blue Star program. Dive shops and fishing charters originating in and operating in the Florida Keys Naitonal Marine Sanctuary (FKNMS) are elegible to be part of the Blue Star program.

Requirements are slightly different based on the industry, but are a collection of best practices for each that go beyond the bare minimum rules and regulations.

Participants in the Blue Star programs provide exceptional customer experiences and set a good example. They protect the resources for the future and show how they can be enjoyed responsibly today.

> Did you know the United States has a national system of underwater parks?


## Contributing Guide

Code contributions are welcome and encouraged.

This project uses the typical github flow:

- Clone the project to your local machine
- Install dependencies
- Work on a feature, bugfix, or documentation
- Create a pull request

The code stack is Nuxt, Express, MongoDB. Having a good foundation in Vue and Node are helpful. TailwindCSS is used for styling components, and a design system is a work in progress.

> A major feature would be creating a Docker image for this project to make getting contributors up to speed quicker.

Content is developed internally with contributions and references from across the wider scientific and regulatory communities.

> Content contributions have been made by FWC, NOAA, Mote Marine Laboratory, Coral Restoration Foundation, Florida DEP, and the staff of Florida Keys National Marine Sanctuary.

If you have a content contribution idea, feel free to explore it but please reach out first. Because Blue Star has specific program goals within FKNMS, which is itself a government agency, there are strict guidelines that must be followed.

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start
```

For a detailed explanation on the framework, check out [Nuxt.js docs](https://nuxtjs.org).

## Docker Setup
Note: Linux users may need to run these commands with `sudo` if your user account is not in the `docker` group. To fix this, run: `sudo usermod -aG docker $USER`, log out and log back in. [docker-compose](https://docs.docker.com/compose/) is required.
### Step 1: Docker Credentials
Edit `docker-compose.yml` and change the passwords to something more secure:
```bash
MONGO_INITDB_ROOT_PASSWORD: <new_password>
MONGO_INITDB_PASSWORD: <another_new_password>
```
Then, change the connection url to match the password in `MONGO_INITDB_PASSWORD`:
```bash
MONGO_URI: "mongodb://bluestar:<another_new_password>@mongo_db:27017/bluestar"
```
### Step 2: Build and Run
```bash
docker-compose build
docker-compose up
```

## Testing

New features and pull requests should have some basic tests. If you need help, reach out to project maintainers.

### Get started with testing

The easiest way to get testing is to use a MongoDB container with Docker:

```bash
docker run -d -p 27017:27017 --name mongo_bluestar_test mongo
```

This launches a MongoDB instance that listens on port 27017 named "mongo_bluestar_test" and then puts it into the background.

Then navigate in a terminal to the "server" folder within the bluestar-nuxt project.

In the server folder run `npm run test` for Jest to run the tests and then wait in watch mode.

### To stop your docker containers

```bash
docker stop mongo_bluestar_test
```

### To restart your docker container

```bash
docker start mongo_bluestar_test
```