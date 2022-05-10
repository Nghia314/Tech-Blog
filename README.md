# Tech-Blog
## Description
- The application contained within is a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. The app follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

## Table of Contents
- Usage
- code snippet
- Technologies
- License


## Usage
Clone the repo, navigate to the root folder, run the following commands from the CLI:
```
Run Test;
npm run test

Seed DB;
npm run seed

Start Server;
npm start server
```
## Code snippet
the following code snippet shows how to create and store user password and change user password
```
 hooks: {
        async beforeCreate(newUserData) {
            newUserData.password = await bcrypt.hash(newUserData.password, 10);
            return newUserData;
        },
        async BeforeUpdate(updatedUserData) {
            updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
            return updatedUserData;
        }
```
## Technologies
- JS
- Node.js
- Handlebars
- Model-View-Controller
- dotenv
- MySQL

## License
![Github licence](http://img.shields.io/badge/license-MIT-blue.svg)

This application is licensed under the MIT license