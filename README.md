# Liftr project

This project was bootsrapped with the [liftr-cli](https://github.com/farisT/liftr-cli). The liftr-cli is a quick project-starter CLI to work with the Liftr framework, it will create the necessary files for you to begin a Node.js & Typescript project. Ontop of that, you can generate new backend components on the fly - providing a quicker way to build structured and robust API's.

The Liftr framework provides structure and tools to build API's in Node.js with [TypeScript](https://www.typescriptlang.org/) and [Express](https://expressjs.com/).

The framework works around 3 folders:

- Routes
- Controllers
- Middlewares

## Routes

When creating a new route with the liftr-cli a module, routes and controller files are created. These provide the base of the sub-routing.  The routes themselves along with what the functionality will be are defined in the routes file. Here a controller is passed by default but you can easily override this by passing your own function or middleware.

## Controllers

The routes themselves along with the functionality are defined within a controller, the controller contains functionality of what data/status to that endpoint.

## Modules

When you want to create a structure of endpoints within liftr a Module should be created. The liftr-cli module generation will create a module, routes and controller files. The module is a collection of all the routes along with extra details on the schema and middleware that you would like to use for that route.