<h1 align="center">
  <img alt="Logo" src=".github/logo.svg" width="200px">
</h1>

<h3 align="center">
   Gobarber API
</h3>

## 💻 About the project

This api provides the possibility of create and manage appointments between barbers and customers.

Customers can choose the best time available to them and create an appointment.

Providers can see their appointments, manage times or profile and see if one client canceled the schedule.

## 🚀 Technologies

Some technologies that was used to develop this api

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [Multer](https://github.com/expressjs/multer)
- [TypeORM](https://typeorm.io/#/)
- [JWT-token](https://jwt.io/)
- [uuid v4](https://github.com/thenativeweb/uuidv4/)
- [PostgreSQL](https://www.postgresql.org/)
- [Date-fns](https://date-fns.org/)
- [Jest](https://jestjs.io/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [EditorConfig](https://editorconfig.org/)

## 💻 Getting started

Download [Insomnia](https://insomnia.rest) and the <a href="https://github.com/thyusofficial/gobarber-api/blob/master/.github/Insomnia.json">routes</a>. Then import into Insomnia to use.

### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) / [npm](https://www.npmjs.com/)
- [PostgreSQL](https://www.postgresql.org/) (this project used Docker)

**Clone access the project folder**

```bash
$ git clone https://github.com/thyusofficial/gobarber-api && cd gobarber-api
```

**Follow the steps below**

```bash
# Install all the dependencies
$ yarn

# Set with your environment variables with a copy of '.env.example' named '.env'.
$ cp .env.example .env

# Create the instance of postgreSQL using docker
$ docker run --name gobarber-postgres -e POSTGRES_USER=docker \
              -e POSTGRES_DB=gobarber -e POSTGRES_PASSWORD=docker \
              -p 5432:5432 -d postgres

# Create the instance of mongoDB using docker
$ docker run --name gobarber-mongodb -p 27017:27017 -d -t mongo

# Create the instance of redis using docker
$ docker run --name gobarber-redis -p 6379:6379 -d -t redis:alpine

# Run the migrations
$ yarn typeorm migration:run

# Run the api service
$ yarn dev:server
```

---

Made by Matheus Cardoso [See my linkedin](https://www.linkedin.com/in/thyus/)
