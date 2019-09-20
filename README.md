<p align="center">
  <img src="https://i.imgur.com/a0rtQCN.png">
</p>

#

This is the backend repository from DevJobs's [Site](https://github.com/gabrielccarvalho/DevJobs) and App.

It's a API REST built with NodeJS + Express.

The main purpose of this project is to get fresh developers, who struggle with the new world of professional programming, and companies in the easiest way possible, so they can built amazing things together.

## Note

This repository is still in building stage. It means that the information provided here can and will constantly update and change as the project evolves, so be aware for the changes!

## About this project

As a developer or a company in general, the biggest problem is always either found a qualified developer or be found by them. Knowing this, I created the DevJobs, which is a open source job match solution for developers and companies.

## Contribuing

You can contribute in many ways, but the most effective is creating a new issue with your sugestion, code, experience, or anything you can think that it will help this project evolve.

If you want to make a pull request, please read this before so you can adequately commit:

-[Semantic Commit](https://seesparkbox.com/foundry/semantic_commit_messages)

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
```

```bash
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

### User related routes

#### List Users

| Endpoint | Method | Params | URL Params | Body | Success Response |         Error Responsonse         |
| :------: | :----: | :----: | :--------: | :--: | :--------------: | :-------------------------------: |
|  /users  |  GET   |   -    |     -      |  -   |  Code: 200 - OK  | Code: 500 - INTERNAL SERVER ERROR |

#### Send Contact Information

| Endpoint | Method | Params | URL Params | Body | Success Response |         Error Responsonse         |
| :------: | :----: | :----: | :--------: | :--: | :--------------: | :-------------------------------: |
| /contact |  POST  |   -    |     -      | JSON |  Code: 200 - OK  | Code: 500 - INTERNAL SERVER ERROR |

The JSON body should look like this:

```JSON
{
  "name": "Gabriel",
  "email": "gabriel@email.com",
  "phone_number": "(99) 99999-9999"
}
```

#### Create Account

| Endpoint | Method | Params | URL Params | Body | Success Response |         Error Responsonse         |
| :------: | :----: | :----: | :--------: | :--: | :--------------: | :-------------------------------: |
|  /users  |  POST  |   -    |     -      | JSON |  Code: 200 - OK  | Code: 500 - INTERNAL SERVER ERROR |

The JSON body should look like this:

- For developers:

```JSON
{
  "name": "Gabriel",
  "email": "gabriel@email.com",
  "numero_cadastro": "000.000.000-00",
  "password": "123456"
}
```

- For companies:

```JSON
{
  "name": "Google",
  "email": "google@email.com",
  "numero_cadastro": "000.000.000-00",
  "password": "123456",
  "company": true
}
```

#### Log in

| Endpoint | Method | Params | URL Params | Body | Success Response |         Error Responsonse         |
| :------: | :----: | :----: | :--------: | :--: | :--------------: | :-------------------------------: |
| /session |  PUT   |   -    |     -      | JSON |  Code: 200 - OK  | Code: 500 - INTERNAL SERVER ERROR |

The JSON body should look like this:

- For both company and developer:

```JSON
{
  "email": "gabriel@email.com",
  "password": "123456"
}
```

#### Update Information

| Endpoint | Method | Params | URL Params | Body | Success Response |         Error Responsonse         |
| :------: | :----: | :----: | :--------: | :--: | :--------------: | :-------------------------------: |
|  /users  |  POST  |   -    |     -      | JSON |  Code: 200 - OK  | Code: 500 - INTERNAL SERVER ERROR |

The JSON body shoul look like this:

- For changing passwords:

```JSON
{
  "email": "gabriel@email.com",
  "oldPassword": "123456",
  "password": "BetterPassword",
  "confirmPassword": "BetterPassword"
}
```

- For changing any other informations:

```JSON
{
  "name": "New Name",
  "email": "NewEmail@email.com",
  "password": "123456"
}
```

#### Add user avatar

| Endpoint | Method | Params | URL Params |      Body      | Success Response |         Error Responsonse         |
| :------: | :----: | :----: | :--------: | :------------: | :--------------: | :-------------------------------: |
|  /files  |  POST  |   -    |     -      | Multipart Form |  Code: 200 - OK  | Code: 500 - INTERNAL SERVER ERROR |

The name of the Multiform Form Data must be 'file' and for the value, the image.

### Action related routes

#### List Invites

| Endpoint | Method | Params | URL Params | Success Response |         Error Responsonse         |
| :------: | :----: | :----: | :--------: | :--------------: | :-------------------------------: |
| /invite  |  GET   |   -    |     -      |  Code: 200 - OK  | Code: 500 - INTERNAL SERVER ERROR |

#### Send Invite

| Endpoint | Method | Params | URL Params | Body | Success Response |         Error Responsonse         |
| :------: | :----: | :----: | :--------: | :--: | :--------------: | :-------------------------------: |
| /invite  |  POST  |   -    |     -      | JSON |  Code: 200 - OK  | Code: 500 - INTERNAL SERVER ERROR |

The JSON body shoul look like this:

```JSON
{
  "user_id": "ID of the user you want to invite"
}
```

#### List Applications

| Endpoint | Method | Params | URL Params | Success Response |         Error Responsonse         |
| :------: | :----: | :----: | :--------: | :--------------: | :-------------------------------: |
|  /apply  |  GET   |   -    |     -      |  Code: 200 - OK  | Code: 500 - INTERNAL SERVER ERROR |

#### Send Application

| Endpoint | Method | Params | URL Params | Body | Success Response |         Error Responsonse         |
| :------: | :----: | :----: | :--------: | :--: | :--------------: | :-------------------------------: |
|  /apply  |  POST  |   -    |     -      | JSON |  Code: 200 - OK  | Code: 500 - INTERNAL SERVER ERROR |

The JSON body shoul look like this:

```JSON
{
  "company_id": "ID of the company you want to apply to"
}
```

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

#### Model Description

This model is used to pass the user information.

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

#### Model Description

This model is used to pass the invitation sender and receiver information.

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

#### Model Description

This model is used to pass the application sender and receiver information.

#### Field Details

- user_id: Is a number field that recieves the id of a non-company type user.
- company_id: Is a number field that recieves the id of a company type user

### New Company

```JavaScript
{
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  phone_number: Sequelize.STRING,
},
```

#### Model Description

This model is used to pass the contact information of a possible new company.

#### Field Details

- name: Is a string field that recieves your name as data.
- email: Is a string field that recieves your email as data.
- phone_number: Is a string field that recieves your phone number as data.

### File

```JavaScript
{
  name: Sequelize.STRING,
  path: Sequelize.STRING,
  url: {
    type: Sequelize.VIRTUAL,
    get() {
      return `${process.env.APP_URL}/files/${this.path}`;
    },
  },
},
```

#### Model Description

This model is used to upload the user avatar image.

#### Field Details

- name: Is a string field that recieves your name as data.
- path: Is a string field that recieves the path for the file as data.
- url: Is a virtual field that recieves the image url as data.

## Technologies:

- [Node](https://nodejs.org/en/) - Build the backend
- [Docker](https://www.docker.com/) - Containers
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
- [Bee-Queue](https://github.com/bee-queue/bee-queue) - Performatic queue management
- [EditorConfig](https://editorconfig.org/) - Consistent coding styles
- [Cors](https://www.npmjs.com/package/cors) - Used to enable CORS.
- [Multer](https://github.com/expressjs/multer) - Used to upload user avatar.
