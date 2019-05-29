# Express Example

This repository contains the [Express](https://expressjs.com) application with sequelize orm.

## Starting App

Install postgres on your system and create a database and update all the credentials in the
.env file. You can refer the sample from .env.default

**Without Migrations**

```
npm install
npm start
```

**With Migrations**

```
npm install
node_modules/.bin/sequelize db:migrate
npm start
```

## Running Tests

I have added some [Mocha](https://mochajs.org) based test. You can run them by `npm test`

#### Sequelize Setup

Now we will install all sequelize related modules.

```bash
# install ORM , CLI and SQLite dialect
npm install sequelize sequelize-cli sqlite3

# generate models
node_modules/.bin/sequelize init
node_modules/.bin/sequelize model:create --name User --attributes username:string
node_modules/.bin/sequelize model:create --name Task --attributes title:string
```