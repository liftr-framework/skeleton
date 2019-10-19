# Liftr project

This project was bootsrapped with the [liftr-cli](https://github.com/farisT/liftr-cli). The liftr-cli is a quick project-starter CLI to work with the Liftr framework, it will create the necessary files for you to begin a Node.js & Typescript project. Ontop of that, you can generate new backend components on the fly - providing a quicker way to build structured and robust API's.

The Liftr framework provides structure and tools to build API's in Node.js with [TypeScript](https://www.typescriptlang.org/) and [Express](https://expressjs.com/).

The framework works around 3 essential components:

- Modules
- Routes
- Controllers

## Modules

When you want to create a structure of endpoints within liftr a Module is created. The liftr-cli module generation will create a module, routes and controller files ncessary for this. The module is a collection of all the routes along with extra details on the schema and middleware that you would like to use for that route. These modules are then passed to the LiftrRoutingModule which register all these routes along with their parent path and any module specific middleware.

## Routes

When creating a new route you must either create a new Module or target an exisiting module to add the route. These provide the base of the sub-routing.  The routes themselves along with what the functionality will be are defined in the routes file. Here a controller is passed by default but you can easily override this by passing your own function(s) or middleware(s).

## Controllers

The routes themselves along with the functionality are defined within a controller, the controller contains functionality of what data/status is sent or received from that endpoint.
