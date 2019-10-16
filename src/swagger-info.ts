// swaggerDescriptions
// ---------------------------
// standard info and port config for the documentation
// the version of openapi used is 3.0.0. THIS SHOULD NOT CHANGE.

export const descriptions = {
    info: {
      title: 'Liftr REST API',
      version: '1.0.0',
      description: 'REST API for all the endpoints',
    },
    servers: [{
      url: `http://localhost:${process.env.PORT || 4000}`,
    }],
    openapi: '3.0.0', 
    paths: {},
  };
  
  // swaggerResponses
  // ---------------------------
  // Define the responses for your API endpoints and setup the requestBody object. 
  
export const responses = {
    responses: {
      200: {
        description: 'OK',
      },
      400: {
        description: 'Error: Bad Request',
      },
      401: {
        description: 'Error: Unauthorized',
      },
    },
    requestBody: {
      required: true,
      content: {
        'application/json': {
            schema: {},
        },
      },
      description: '',
    },
  };