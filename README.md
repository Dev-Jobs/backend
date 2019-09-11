<p align="center">
  <img src="https://i.imgur.com/a0rtQCN.png">
</p>

#

This is the backend repository from DevJobs's Site and App.

It's a API REST built with NodeJS + Express.

The main purpose of this project is to get fresh developers, who struggle with the new world of professional programming, and companies in the easiest way possible, so they can built amazing things together.

## Note

This repository is still in building stage. It means that the information provided here can and will constantly update and change as the project evolves, so be aware for the changes!

## About this project

As a developer or a company in general, the biggest problem is always either found a qualified developer or be found by them. Knowing this, I created the DevJobs, which is a open source job match solution for developers and companies.

## Contribuing

You can contribute in many ways, but the most effective is creating a new issue with your sugestion, code, experience, or anything you can think that it will help this project evolve.

## Getting started

### Pre-requisits

To run this project in the development mode, you'll need to have a basic environment with NodeJS 8+ installed. To use the database, you'll need to have MongoDB and Postgress installed and running on your machine.

### Docker

To run this project you will need to have Docker runing in your machine and have some images configurated.

To do so, you will need to create the following images:

Postgres (Note: Replace the <password> field for the password you want):

```bash
$ docker run --name database -e POSTGRES_PASSWORD=<password> -p 5432:5432 -d postgres
```

Redis:

```bash
$ docker run --name redis -p 6379:6379 -d -t redis:alpine
```

### Installing

Cloning the repository

```bash
$ https://github.com/gabrielccarvalho/devjobs-backend
$ cd devjobs-backend
```

Creating a .env file

You will need to create a .env file with every field in .env.example filled with real information.

Installing the dependencies

```bash
$ yarn
```

Running the development enviroment

```bash
$ yarn dev
```

## Routes

Comming Soon when the first production version come out!

## Models

### User

```JavaScript
{
name: Sequelize.STRING,
email: Sequelize.STRING,
numero_cadastro: Sequelize.STRING,
company: Sequelize.BOOLEAN,
password: Sequelize.VIRTUAL,
password_hash: Sequelize.STRING,
},
```

#### Field Details

- name: Is a string field that recieves your name as data.
- email: Is a string field that recieves your email as data.
- numero_cadastro: Is a string field that recieves either your cpf or cnpj (if you are a company) as data.
- company: Is a Boolean field that recieves your status (company or non-company type user) as data.
- password: Is a virtual field that recieves your actual password as data.
- password_hash: Is a string field that recieves your hashed password as data.

### Invitation

This model only have foreign keys.

```JavaScript
static associate(models) {
this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
this.belongsTo(models.User, { foreignKey: 'company_id', as: 'company' });
}
```

#### Field Details

- user_id: Is a number field that recieves the id of a non-company type user.
- company_id: Is a number field that recieves the id of a company type user

### Application

This model only have foreign keys.

```JavaScript
static associate(models) {
this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
this.belongsTo(models.User, { foreignKey: 'company_id', as: 'company' });
}
```

#### Field Details

- user_id: Is a number field that recieves the id of a non-company type user.
- company_id: Is a number field that recieves the id of a company type user

## Technologies:

- [Node](https://nodejs.org/en/) - Build the backend
- [Body-Parser](https://github.com/expressjs/body-parser#readme) - Node.js body parsing middleware
- [Eslint](https://eslint.org/) - JS Linter and code style
- [Prettier](https://github.com/prettier/prettier) - Code formatter
- [Mongoose](https://mongoosejs.com/) - Object Modeling + DB Connector
- [Dotenv](https://github.com/motdotla/dotenv) - Environment loader
- [Nodemon](https://nodemon.io/) - Process Manager used in the development
- [Sucrase](https://sucrase.io/) - Babel alternative
- [Bcrypt](https://www.npmjs.com/package/bcryptjs) - Hashing passwords
- [Express](https://expressjs.com/) - Application Router
- [JSON Web Token](https://jwt.io/) - User authentication
- [MongoDB](https://www.mongodb.com/) - Database
- [PostgreSQL](https://www.postgresql.org/) - Database
- [Sequelize](https://sequelize.org/) - Object Modeling + PostgreSQL Connector
- [NodeMailer](https://nodemailer.com/about/) - Mail handler
- [HandleBars](https://handlebarsjs.com/) - Mail template engine
- [Redis](https://redis.io/) - Performatic database for mail queues
- [Docker](https://www.docker.com/) - Containers
