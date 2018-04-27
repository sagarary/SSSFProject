define({ "api": [
  {
    "type": "delete",
    "url": "/events/:id",
    "title": "Remove an event",
    "description": "<p>Remove the event with given ID</p>",
    "group": "Events",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>Events ID to delete</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 OK\n {\n 'message': 'Successfully deleted',\n 'id' : '507f1f77bcf86cd799439011'\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Delete error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/events.js",
    "groupTitle": "Events",
    "name": "DeleteEventsId"
  },
  {
    "type": "get",
    "url": "/events",
    "title": "Get all events",
    "description": "<p>Contains all the events added</p>",
    "group": "Events",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "location",
            "description": "<p>Location Event location</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "organiser",
            "description": "<p>User Event organiser</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Event Event Name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Event Event Description</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>Event Event Date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "duration",
            "description": "<p>Event Event Duration</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "invited",
            "description": "<p>Event Invited users and RSVP status</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 OK\n{\n\"location\" : \"507f1f77bcf86cd799439011\"\n\"organiser\" : \"4b7f1f77bcf86cd799439031\",\n\"name\" : \"Event name\"\n\"description\" : \"Event description\",\n\"duration\" : \"2 hrs\",\n\"date\" : \"2018-10-05T14:48:00.000Z\"\ninvited : {\n        going : [\"407f1f77bcf86cd799439013\"],\n        notGoing : [\"307f1f77bcf86cd799439014\"],\n        noRSVP : [\"207f1f77bcf86cd799439015\"]\n        }\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/events.js",
    "groupTitle": "Events",
    "name": "GetEvents"
  },
  {
    "type": "get",
    "url": "/events/:id",
    "title": "Lookup an event by ID",
    "description": "<p>Find event with a given ID</p>",
    "group": "Events",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "id",
            "description": "<p>Events Event id to look for</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "location",
            "description": "<p>Location Event location</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "organiser",
            "description": "<p>User Event organiser</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Event Event Name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Event Event Description</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>Event Event Date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "duration",
            "description": "<p>Event Event Duration</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "invited",
            "description": "<p>Event Invited users and RSVP status</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 OK\n{\n\"location\" : \"507f1f77bcf86cd799439011\"\n\"organiser\" : \"4b7f1f77bcf86cd799439031\",\n\"name\" : \"Event name\"\n\"description\" : \"Event description\",\n\"duration\" : \"2 hrs\",\n\"date\" : \"2018-10-05T14:48:00.000Z\"\ninvited : {\n        going : [\"407f1f77bcf86cd799439013\"],\n        notGoing : [\"307f1f77bcf86cd799439014\"],\n        noRSVP : [\"207f1f77bcf86cd799439015\"]\n        }\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/events.js",
    "groupTitle": "Events",
    "name": "GetEventsId"
  },
  {
    "type": "get",
    "url": "/events/location/:id",
    "title": "Get events for given location",
    "description": "<p>Find events in a given location</p>",
    "group": "Events",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "id",
            "description": "<p>Events Location id to look for</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "location",
            "description": "<p>Location Event location</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "organiser",
            "description": "<p>User Event organiser</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Event Event Name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Event Event Description</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>Event Event Date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "duration",
            "description": "<p>Event Event Duration</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "invited",
            "description": "<p>Event Invited users and RSVP status</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 OK\n{\n\"location\" : \"507f1f77bcf86cd799439011\"\n\"organiser\" : \"4b7f1f77bcf86cd799439031\",\n\"name\" : \"Event name\"\n\"description\" : \"Event description\",\n\"duration\" : \"2 hrs\",\n\"date\" : \"2018-10-05T14:48:00.000Z\"\ninvited : {\n        going : [\"407f1f77bcf86cd799439013\"],\n        notGoing : [\"307f1f77bcf86cd799439014\"],\n        noRSVP : [\"207f1f77bcf86cd799439015\"]\n        }\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/events.js",
    "groupTitle": "Events",
    "name": "GetEventsLocationId"
  },
  {
    "type": "get",
    "url": "/events/name/:name",
    "title": "Search for events with name",
    "description": "<p>Lists all events that contain the given name</p>",
    "group": "Events",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Events Event name to look for</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "location",
            "description": "<p>Location Event location</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "organiser",
            "description": "<p>User Event organiser</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Event Event Name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Event Event Description</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>Event Event Date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "duration",
            "description": "<p>Event Event Duration</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "invited",
            "description": "<p>Event Invited users and RSVP status</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 OK\n{\n\"location\" : \"507f1f77bcf86cd799439011\"\n\"organiser\" : \"4b7f1f77bcf86cd799439031\",\n\"name\" : \"Event name\"\n\"description\" : \"Event description\",\n\"duration\" : \"2 hrs\",\n\"date\" : \"2018-10-05T14:48:00.000Z\"\ninvited : {\n        going : [\"407f1f77bcf86cd799439013\"],\n        notGoing : [\"307f1f77bcf86cd799439014\"],\n        noRSVP : [\"207f1f77bcf86cd799439015\"]\n        }\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/events.js",
    "groupTitle": "Events",
    "name": "GetEventsNameName"
  },
  {
    "type": "get",
    "url": "/events/organiser/:id",
    "title": "Get all events organised by an user",
    "description": "<p>All active events organised by a user</p>",
    "group": "Events",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "id",
            "description": "<p>Events User id to look for</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "location",
            "description": "<p>Location Event location</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "organiser",
            "description": "<p>User Event organiser</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Event Event Name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Event Event Description</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>Event Event Date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "duration",
            "description": "<p>Event Event Duration</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "invited",
            "description": "<p>Event Invited users and RSVP status</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 OK\n{\n\"location\" : \"507f1f77bcf86cd799439011\"\n\"organiser\" : \"4b7f1f77bcf86cd799439031\",\n\"name\" : \"Event name\"\n\"description\" : \"Event description\",\n\"duration\" : \"2 hrs\",\n\"date\" : \"2018-10-05T14:48:00.000Z\"\ninvited : {\n        going : [\"407f1f77bcf86cd799439013\"],\n        notGoing : [\"307f1f77bcf86cd799439014\"],\n        noRSVP : [\"207f1f77bcf86cd799439015\"]\n        }\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/events.js",
    "groupTitle": "Events",
    "name": "GetEventsOrganiserId"
  },
  {
    "type": "post",
    "url": "/events",
    "title": "Create new event",
    "description": "<p>Creates new event based on provided data</p>",
    "group": "Events",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "location",
            "description": "<p>Location Event location</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "organiser",
            "description": "<p>User Event organiser</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Event Event Name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Event Event Description</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>Event Event Date</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "duration",
            "description": "<p>Event Event Duration</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "invited",
            "description": "<p>Event Invited users and RSVP status</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "new Event",
          "content": " HTTP/1.1 200 OK\n{\n\"location\" : \"507f1f77bcf86cd799439011\"\n\"organiser\" : \"4b7f1f77bcf86cd799439031\",\n\"name\" : \"Event name\"\n\"description\" : \"Event description\",\n\"duration\" : \"2 hrs\",\n\"date\" : \"2018-10-05T14:48:00.000Z\"\ninvited : {\n        going : [\"4b7f1f77bcf86cd799439031\"],\n        notGoing : [],\n        noRSVP : [\"207f1f77bcf86cd799439015\", \"307f1f77bcf86cd799439014\"]\n        }\n    }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "location",
            "description": "<p>Location Event location</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "organiser",
            "description": "<p>User Event organiser</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Event Event Name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Event Event Description</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>Event Event Date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "duration",
            "description": "<p>Event Event Duration</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "invited",
            "description": "<p>Event Invited users and RSVP status</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 OK\n{\n\"location\" : \"507f1f77bcf86cd799439011\"\n\"organiser\" : \"4b7f1f77bcf86cd799439031\",\n\"name\" : \"Event name\"\n\"description\" : \"Event description\",\n\"duration\" : \"2 hrs\",\n\"date\" : \"2018-10-05T14:48:00.000Z\"\ninvited : {\n        going : [\"407f1f77bcf86cd799439013\"],\n        notGoing : [],\n        noRSVP : [\"207f1f77bcf86cd799439015\", \"307f1f77bcf86cd799439014\"]\n        }\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/events.js",
    "groupTitle": "Events",
    "name": "PostEvents"
  },
  {
    "type": "post",
    "url": "/events/:id",
    "title": "Update event",
    "description": "<p>Updates an event with given id based on provided data</p>",
    "group": "Events",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>Event Event Id to update</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "location",
            "description": "<p>Location Event location</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "organiser",
            "description": "<p>User Event organiser</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Event Event Name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Event Event Description</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>Event Event Date</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "duration",
            "description": "<p>Event Event Duration</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "invited",
            "description": "<p>Event Invited users and RSVP status</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "new Event",
          "content": " HTTP/1.1 200 OK\n{\n\"location\" : \"507f1f77bcf86cd799439011\"\n\"organiser\" : \"4b7f1f77bcf86cd799439031\",\n\"name\" : \"Event name\"\n\"description\" : \"Event description\",\n\"duration\" : \"2 hrs\",\n\"date\" : \"2018-10-05T14:48:00.000Z\"\ninvited : {\n        going : [\"4b7f1f77bcf86cd799439031\"],\n        notGoing : [],\n        noRSVP : [\"207f1f77bcf86cd799439015\", \"307f1f77bcf86cd799439014\"]\n        }\n    }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "location",
            "description": "<p>Location Event location</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "organiser",
            "description": "<p>User Event organiser</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Event Event Name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Event Event Description</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>Event Event Date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "duration",
            "description": "<p>Event Event Duration</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "invited",
            "description": "<p>Event Invited users and RSVP status</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 OK\n{\n\"location\" : \"507f1f77bcf86cd799439011\"\n\"organiser\" : \"4b7f1f77bcf86cd799439031\",\n\"name\" : \"Event name\"\n\"description\" : \"Event description\",\n\"duration\" : \"2 hrs\",\n\"date\" : \"2018-10-05T14:48:00.000Z\"\ninvited : {\n        going : [\"407f1f77bcf86cd799439013\"],\n        notGoing : [],\n        noRSVP : [\"207f1f77bcf86cd799439015\", \"307f1f77bcf86cd799439014\"]\n        }\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/events.js",
    "groupTitle": "Events",
    "name": "PostEventsId"
  },
  {
    "type": "delete",
    "url": "/locations/:id",
    "title": "Remove a location",
    "description": "<p>Remove the location with given ID</p>",
    "group": "Locations",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>Locations ID to delete</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 OK\n {\n 'message': 'Successfully deleted',\n 'id' : '507f1f77bcf86cd799439011'\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Delete error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/locations.js",
    "groupTitle": "Locations",
    "name": "DeleteLocationsId"
  },
  {
    "type": "get",
    "url": "/locations",
    "title": "Get all locations",
    "description": "<p>Contains all the locations added</p>",
    "group": "Locations",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Location Location name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "details",
            "description": "<p>Location Location description</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "coordinates",
            "description": "<p>Location Coordinates of the location</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cover",
            "description": "<p>Location Cover image/media for location</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "media",
            "description": "<p>Location Media files associated with the location</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "reviews",
            "description": "<p>Location Reviews associated with the location</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalReviews",
            "description": "<p>Location Total number of reviews for the location</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "stars",
            "description": "<p>Location Aggregate stars for the location</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 OK\n{\n\"name\" : \"Location name\"\n\"details\" : \"A quick brown fox jumps over a lazy dog\",\n\"coordinates\" : {\n\"lat\": 77.77,\n\"lng\": 77.77\n },\n\"cover\" : \"file path to cover\",\n\"duration\" : \"2 hrs\",\n\"media\" : {\n        \"photos\" : ['/photos/photo.jpg'],\n        \"videos\" : ['/photos/video.mp4'],\n        \"audios\" : ['/photos/audio.mp3]\n    },\n\"reviews\" : [\"407f1f77bcf86cd79b439013\", \"307f1f77bcf86cd79b43901b\"],\n\"totalReviews\" :10,\n\"stars\" : 4.5,\n\"added\" : \"507f1f77bcf86cd799439011\"\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/locations.js",
    "groupTitle": "Locations",
    "name": "GetLocations"
  },
  {
    "type": "get",
    "url": "/locations/:id",
    "title": "Get locations based on id",
    "description": "<p>Fetches location with given id</p>",
    "group": "Locations",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>Location Location id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Location Location name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "details",
            "description": "<p>Location Location description</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "coordinates",
            "description": "<p>Location Coordinates of the location</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cover",
            "description": "<p>Location Cover image/media for location</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "media",
            "description": "<p>Location Media files associated with the location</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "reviews",
            "description": "<p>Location Reviews associated with the location</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalReviews",
            "description": "<p>Location Total number of reviews for the location</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "stars",
            "description": "<p>Location Aggregate stars for the location</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 OK\n{\n\"name\" : \"Location name\"\n\"details\" : \"A quick brown fox jumps over a lazy dog\",\n\"coordinates\" : {\n\"lat\": 77.77,\n\"lng\": 77.77\n },\n\"cover\" : \"file path to cover\",\n\"duration\" : \"2 hrs\",\n\"media\" : {\n        \"photos\" : ['/photos/photo.jpg'],\n        \"videos\" : ['/photos/video.mp4'],\n        \"audios\" : ['/photos/audio.mp3]\n    },\n\"reviews\" : [\"407f1f77bcf86cd79b439013\", \"307f1f77bcf86cd79b43901b\"],\n\"totalReviews\" :10,\n\"stars\" : 4.5,\n\"added\" : \"507f1f77bcf86cd799439011\"\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/locations.js",
    "groupTitle": "Locations",
    "name": "GetLocationsId"
  },
  {
    "type": "get",
    "url": "/locations/name/:name",
    "title": "",
    "description": "<p>Get a location with name that matches given parameter</p>",
    "group": "Locations",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Location Location name</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Location Location name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "details",
            "description": "<p>Location Location description</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "coordinates",
            "description": "<p>Location Coordinates of the location</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cover",
            "description": "<p>Location Cover image/media for location</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "media",
            "description": "<p>Location Media files associated with the location</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "reviews",
            "description": "<p>Location Reviews associated with the location</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalReviews",
            "description": "<p>Location Total number of reviews for the location</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "stars",
            "description": "<p>Location Aggregate stars for the location</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 OK\n{\n\"name\" : \"Location name\"\n\"details\" : \"A quick brown fox jumps over a lazy dog\",\n\"coordinates\" : {\n\"lat\": 77.77,\n\"lng\": 77.77\n },\n\"cover\" : \"file path to cover\",\n\"duration\" : \"2 hrs\",\n\"media\" : {\n        \"photos\" : ['/photos/photo.jpg'],\n        \"videos\" : ['/photos/video.mp4'],\n        \"audios\" : ['/photos/audio.mp3]\n    },\n\"reviews\" : [\"407f1f77bcf86cd79b439013\", \"307f1f77bcf86cd79b43901b\"],\n\"totalReviews\" :10,\n\"stars\" : 4.5,\n\"added\" : \"507f1f77bcf86cd799439011\"\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/locations.js",
    "groupTitle": "Locations",
    "name": "GetLocationsNameName"
  },
  {
    "type": "post",
    "url": "/locations",
    "title": "Add new location",
    "description": "<p>Add a new location based on input data</p>",
    "group": "Locations",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Location Location name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "details",
            "description": "<p>Location Location description</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "coordinates",
            "description": "<p>Location Coordinates of the location</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cover",
            "description": "<p>Location Cover image/media for location</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "media",
            "description": "<p>Location Media files associated with the location</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "reviews",
            "description": "<p>Location Reviews associated with the location</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "totalReviews",
            "description": "<p>Location Total number of reviews for the location</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "stars",
            "description": "<p>Location Aggregate stars for the location</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "new Location",
          "content": "{\n\"name\" : \"Location name\"\n\"details\" : \"A quick brown fox jumps over a lazy dog\",\n\"coordinates\" : {\n\"lat\": 77.77,\n\"lng\": 77.77\n },\n\"cover\" : \"file path to cover\",\n\"duration\" : \"2 hrs\",\n\"media\" : {\n        \"photos\" : ['/photos/photo.jpg'],\n        \"videos\" : ['/photos/video.mp4'],\n        \"audios\" : ['/photos/audio.mp3]\n    },\n\"reviews\" : [\"407f1f77bcf86cd79b439013\", \"307f1f77bcf86cd79b43901b\"],\n\"totalReviews\" :10,\n\"stars\" : 4.5,\n\"added\" : \"507f1f77bcf86cd799439011\"\n    }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Location Location name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "details",
            "description": "<p>Location Location description</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "coordinates",
            "description": "<p>Location Coordinates of the location</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cover",
            "description": "<p>Location Cover image/media for location</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "media",
            "description": "<p>Location Media files associated with the location</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "reviews",
            "description": "<p>Location Reviews associated with the location</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalReviews",
            "description": "<p>Location Total number of reviews for the location</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "stars",
            "description": "<p>Location Aggregate stars for the location</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 OK\n{\n\"name\" : \"Location name\"\n\"details\" : \"A quick brown fox jumps over a lazy dog\",\n\"coordinates\" : {\n\"lat\": 77.77,\n\"lng\": 77.77\n },\n\"cover\" : \"file path to cover\",\n\"duration\" : \"2 hrs\",\n\"media\" : {\n        \"photos\" : ['/photos/photo.jpg'],\n        \"videos\" : ['/photos/video.mp4'],\n        \"audios\" : ['/photos/audio.mp3]\n    },\n\"reviews\" : [\"407f1f77bcf86cd79b439013\", \"307f1f77bcf86cd79b43901b\"],\n\"totalReviews\" :10,\n\"stars\" : 4.5,\n\"added\" : \"507f1f77bcf86cd799439011\"\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/locations.js",
    "groupTitle": "Locations",
    "name": "PostLocations"
  },
  {
    "type": "post",
    "url": "/locations/id",
    "title": "Update a location",
    "description": "<p>Update a location based on input data and provided id</p>",
    "group": "Locations",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>Location Location id to update</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Location Location name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "details",
            "description": "<p>Location Location description</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "coordinates",
            "description": "<p>Location Coordinates of the location</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cover",
            "description": "<p>Location Cover image/media for location</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "media",
            "description": "<p>Location Media files associated with the location</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "reviews",
            "description": "<p>Location Reviews associated with the location</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "totalReviews",
            "description": "<p>Location Total number of reviews for the location</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "stars",
            "description": "<p>Location Aggregate stars for the location</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "new Location",
          "content": "{\n\"name\" : \"Location name\"\n\"details\" : \"A quick brown fox jumps over a lazy dog\",\n\"coordinates\" : {\n\"lat\": 77.77,\n\"lng\": 77.77\n },\n\"cover\" : \"file path to cover\",\n\"duration\" : \"2 hrs\",\n\"media\" : {\n        \"photos\" : ['/photos/photo.jpg'],\n        \"videos\" : ['/photos/video.mp4'],\n        \"audios\" : ['/photos/audio.mp3]\n    },\n\"reviews\" : [\"407f1f77bcf86cd79b439013\", \"307f1f77bcf86cd79b43901b\"],\n\"totalReviews\" :10,\n\"stars\" : 4.5,\n\"added\" : \"507f1f77bcf86cd799439011\"\n    }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Location Location name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "details",
            "description": "<p>Location Location description</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "coordinates",
            "description": "<p>Location Coordinates of the location</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cover",
            "description": "<p>Location Cover image/media for location</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "media",
            "description": "<p>Location Media files associated with the location</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "reviews",
            "description": "<p>Location Reviews associated with the location</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalReviews",
            "description": "<p>Location Total number of reviews for the location</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "stars",
            "description": "<p>Location Aggregate stars for the location</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 OK\n{\n\"name\" : \"Location name\"\n\"details\" : \"A quick brown fox jumps over a lazy dog\",\n\"coordinates\" : {\n\"lat\": 77.77,\n\"lng\": 77.77\n },\n\"cover\" : \"file path to cover\",\n\"duration\" : \"2 hrs\",\n\"media\" : {\n        \"photos\" : ['/photos/photo.jpg'],\n        \"videos\" : ['/photos/video.mp4'],\n        \"audios\" : ['/photos/audio.mp3]\n    },\n\"reviews\" : [\"407f1f77bcf86cd79b439013\", \"307f1f77bcf86cd79b43901b\"],\n\"totalReviews\" :10,\n\"stars\" : 4.5,\n\"added\" : \"507f1f77bcf86cd799439011\"\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/locations.js",
    "groupTitle": "Locations",
    "name": "PostLocationsId"
  },
  {
    "type": "delete",
    "url": "/reviews/:id",
    "title": "Remove a review",
    "description": "<p>Remove the review with given ID</p>",
    "group": "Reviews",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>Review ID to delete</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 OK\n {\n 'message': 'Successfully deleted',\n 'id' : '507f1f77bcf86cd799439011'\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Delete error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/reviews.js",
    "groupTitle": "Reviews",
    "name": "DeleteReviewsId"
  },
  {
    "type": "get",
    "url": "/reviews",
    "title": "Get all reviews",
    "description": "<p>Contains all the reviews added</p>",
    "group": "Reviews",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "location",
            "description": "<p>Review Location associated with Review</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>Review date of the review</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "reviewer",
            "description": "<p>User User who posted the review</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Review Review title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "review",
            "description": "<p>Review Review text content</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "media",
            "description": "<p>Review Media content associated with the review</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 OK\n{\n\"location\" : \"507f1f77bcf86cd799439011\"\n\"date\" : \"2018-10-05T14:48:00.000Z\",\n\"reviewer\" : \"407f1f77bcfb6cd7994390d6\"\n\"title\" : \"Review title\",\n\"review\" : \"a quick brown fox jumps over a lazy dog\",\n\"media\" : {\n        \"photos\" : [\"photos/photo.jpg\"],\n        \"videos\" : [\"videos/video.mp4\"],\n        \"audios\" : [\"audios/audios.mp3\"]\n        }\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/reviews.js",
    "groupTitle": "Reviews",
    "name": "GetReviews"
  },
  {
    "type": "get",
    "url": "/reviews/:id",
    "title": "Get review with given id",
    "description": "<p>Returns review with given id</p>",
    "group": "Reviews",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>Review Review id to look</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "location",
            "description": "<p>Review Location associated with Review</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>Review date of the review</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "reviewer",
            "description": "<p>User User who posted the review</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Review Review title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "review",
            "description": "<p>Review Review text content</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "media",
            "description": "<p>Review Media content associated with the review</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 OK\n{\n\"location\" : \"507f1f77bcf86cd799439011\"\n\"date\" : \"2018-10-05T14:48:00.000Z\",\n\"reviewer\" : \"407f1f77bcfb6cd7994390d6\"\n\"title\" : \"Review title\",\n\"review\" : \"a quick brown fox jumps over a lazy dog\",\n\"media\" : {\n        \"photos\" : [\"photos/photo.jpg\"],\n        \"videos\" : [\"videos/video.mp4\"],\n        \"audios\" : [\"audios/audios.mp3\"]\n        }\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/reviews.js",
    "groupTitle": "Reviews",
    "name": "GetReviewsId"
  },
  {
    "type": "get",
    "url": "/reviews/location/:id",
    "title": "Get all reviews associated with given location",
    "description": "<p>Gets all reviews for given location</p>",
    "group": "Reviews",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "location",
            "description": "<p>Review Location associated with Review</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>Review date of the review</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "reviewer",
            "description": "<p>User User who posted the review</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Review Review title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "review",
            "description": "<p>Review Review text content</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "media",
            "description": "<p>Review Media content associated with the review</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 OK\n{\n\"location\" : \"507f1f77bcf86cd799439011\"\n\"date\" : \"2018-10-05T14:48:00.000Z\",\n\"reviewer\" : \"407f1f77bcfb6cd7994390d6\"\n\"title\" : \"Review title\",\n\"review\" : \"a quick brown fox jumps over a lazy dog\",\n\"media\" : {\n        \"photos\" : [\"photos/photo.jpg\"],\n        \"videos\" : [\"videos/video.mp4\"],\n        \"audios\" : [\"audios/audios.mp3\"]\n        }\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/reviews.js",
    "groupTitle": "Reviews",
    "name": "GetReviewsLocationId"
  },
  {
    "type": "get",
    "url": "/reviews/reviewer/id",
    "title": "Get all reviews from provided user",
    "description": "<p>Contains reviews by single user</p>",
    "group": "Reviews",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "location",
            "description": "<p>Review Location associated with Review</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>Review date of the review</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "reviewer",
            "description": "<p>User User who posted the review</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Review Review title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "review",
            "description": "<p>Review Review text content</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "media",
            "description": "<p>Review Media content associated with the review</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 OK\n{\n\"location\" : \"507f1f77bcf86cd799439011\"\n\"date\" : \"2018-10-05T14:48:00.000Z\",\n\"reviewer\" : \"407f1f77bcfb6cd7994390d6\"\n\"title\" : \"Review title\",\n\"review\" : \"a quick brown fox jumps over a lazy dog\",\n\"media\" : {\n        \"photos\" : [\"photos/photo.jpg\"],\n        \"videos\" : [\"videos/video.mp4\"],\n        \"audios\" : [\"audios/audios.mp3\"]\n        }\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/reviews.js",
    "groupTitle": "Reviews",
    "name": "GetReviewsReviewerId"
  },
  {
    "type": "post",
    "url": "/reviews",
    "title": "Get all reviews",
    "description": "<p>Contains all the reviews added</p>",
    "group": "Reviews",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "location",
            "description": "<p>Review Location associated with Review</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>Review date of the review</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "reviewer",
            "description": "<p>User User who posted the review</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Review Review title</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "review",
            "description": "<p>Review Review text content</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "media",
            "description": "<p>Review Media content associated with the review</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "new review",
          "content": " {\n\"location\" : \"507f1f77bcf86cd799439011\"\n\"date\" : \"2018-10-05T14:48:00.000Z\",\n\"reviewer\" : \"407f1f77bcfb6cd7994390d6\"\n\"title\" : \"Review title\",\n\"review\" : \"a quick brown fox jumps over a lazy dog\",\n\"media\" : {\n        \"photos\" : [\"photos/photo.jpg\"],\n        \"videos\" : [\"videos/video.mp4\"],\n        \"audios\" : [\"audios/audios.mp3\"]\n        }\n    }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "location",
            "description": "<p>Review Location associated with Review</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>Review date of the review</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "reviewer",
            "description": "<p>User User who posted the review</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Review Review title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "review",
            "description": "<p>Review Review text content</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "media",
            "description": "<p>Review Media content associated with the review</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 OK\n{\n\"location\" : \"507f1f77bcf86cd799439011\"\n\"date\" : \"2018-10-05T14:48:00.000Z\",\n\"reviewer\" : \"407f1f77bcfb6cd7994390d6\"\n\"title\" : \"Review title\",\n\"review\" : \"a quick brown fox jumps over a lazy dog\",\n\"media\" : {\n        \"photos\" : [\"photos/photo.jpg\"],\n        \"videos\" : [\"videos/video.mp4\"],\n        \"audios\" : [\"audios/audios.mp3\"]\n        }\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/reviews.js",
    "groupTitle": "Reviews",
    "name": "PostReviews"
  },
  {
    "type": "post",
    "url": "/reviews/:id",
    "title": "update a review",
    "description": "<p>Contains all the reviews added</p>",
    "group": "Reviews",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the review to update</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "location",
            "description": "<p>Review Location associated with Review</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>Review date of the review</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "reviewer",
            "description": "<p>User User who posted the review</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Review Review title</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "review",
            "description": "<p>Review Review text content</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "media",
            "description": "<p>Review Media content associated with the review</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "new review",
          "content": " {\n\"location\" : \"507f1f77bcf86cd799439011\"\n\"date\" : \"2018-10-05T14:48:00.000Z\",\n\"reviewer\" : \"407f1f77bcfb6cd7994390d6\"\n\"title\" : \"Review title\",\n\"review\" : \"a quick brown fox jumps over a lazy dog\",\n\"media\" : {\n        \"photos\" : [\"photos/photo.jpg\"],\n        \"videos\" : [\"videos/video.mp4\"],\n        \"audios\" : [\"audios/audios.mp3\"]\n        }\n    }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "location",
            "description": "<p>Review Location associated with Review</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>Review date of the review</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "reviewer",
            "description": "<p>User User who posted the review</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Review Review title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "review",
            "description": "<p>Review Review text content</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "media",
            "description": "<p>Review Media content associated with the review</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 OK\n{\n\"location\" : \"507f1f77bcf86cd799439011\"\n\"date\" : \"2018-10-05T14:48:00.000Z\",\n\"reviewer\" : \"407f1f77bcfb6cd7994390d6\"\n\"title\" : \"Review title\",\n\"review\" : \"a quick brown fox jumps over a lazy dog\",\n\"media\" : {\n        \"photos\" : [\"photos/photo.jpg\"],\n        \"videos\" : [\"videos/video.mp4\"],\n        \"audios\" : [\"audios/audios.mp3\"]\n        }\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/reviews.js",
    "groupTitle": "Reviews",
    "name": "PostReviewsId"
  },
  {
    "type": "delete",
    "url": "/users/:id",
    "title": "Remove a user",
    "description": "<p>Remove the user with given ID</p>",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>User ID to delete</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 OK\n {\n 'message': 'Successfully deleted',\n 'id' : '507f1f77bcf86cd799439011'\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Delete error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/users.js",
    "groupTitle": "Users",
    "name": "DeleteUsersId"
  },
  {
    "type": "get",
    "url": "/user/user/:name",
    "title": "Get user with given name",
    "description": "<p>Get user with the parameter string in username,firstname or lastname</p>",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User Username</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>User First Name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>User Last Name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User Email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User Password</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "address",
            "description": "<p>User Address of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "lastLogin",
            "description": "<p>User Last login date</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "connections",
            "description": "<p>User Users connected with the user</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "events",
            "description": "<p>User Events associated with the user</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "reviews",
            "description": "<p>by the user User Reviews by the user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 OK\n{\n\"username\": \"username\",\n\"firstName\" : \"firstname\",\n\"lastName\" : \"lastname\",\n\"email\" : \"email@mail.mail\",\n\"password\" : \"sajdhsdhjkas\",\n\"address\" :{\n\"country\" : \"country\",\n\"city\" : \"city\",\n\"zip\" : \"123\",\n},\n\"lastLogin\" : \"2018-10-05T14:48:00.000Z\",\n\"connections\" : [\"4b7f1f77bcfb6cd79943954d\"],\n\"events\" : [\"407e1f77bcfb6cd7994590df\"],\nreviews : [\"07f1f77bcfb6cd79943910e\"],\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/users.js",
    "groupTitle": "Users",
    "name": "GetUserUserName"
  },
  {
    "type": "get",
    "url": "/users/list",
    "title": "Lists all users",
    "description": "<p>List of all the users</p>",
    "group": "Users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User Username</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>User First Name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>User Last Name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User Email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User Password</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "address",
            "description": "<p>User Address of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "lastLogin",
            "description": "<p>User Last login date</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "connections",
            "description": "<p>User Users connected with the user</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "events",
            "description": "<p>User Events associated with the user</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "reviews",
            "description": "<p>by the user User Reviews by the user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 OK\n{\n\"username\": \"username\",\n\"firstName\" : \"firstname\",\n\"lastName\" : \"lastname\",\n\"email\" : \"email@mail.mail\",\n\"password\" : \"sajdhsdhjkas\",\n\"address\" :{\n\"country\" : \"country\",\n\"city\" : \"city\",\n\"zip\" : \"123\",\n},\n\"lastLogin\" : \"2018-10-05T14:48:00.000Z\",\n\"connections\" : [\"4b7f1f77bcfb6cd79943954d\"],\n\"events\" : [\"407e1f77bcfb6cd7994590df\"],\nreviews : [\"07f1f77bcfb6cd79943910e\"],\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/users.js",
    "groupTitle": "Users",
    "name": "GetUsersList"
  },
  {
    "type": "get",
    "url": "/users/userid/:id",
    "title": "Get user with given id",
    "description": "<p>Get the user with provided id</p>",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "id",
            "description": "<p>User user id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User Username</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>User First Name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>User Last Name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User Email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User Password</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "address",
            "description": "<p>User Address of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "lastLogin",
            "description": "<p>User Last login date</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "connections",
            "description": "<p>User Users connected with the user</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "events",
            "description": "<p>User Events associated with the user</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "reviews",
            "description": "<p>by the user User Reviews by the user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 OK\n{\n\"username\": \"username\",\n\"firstName\" : \"firstname\",\n\"lastName\" : \"lastname\",\n\"email\" : \"email@mail.mail\",\n\"password\" : \"sajdhsdhjkas\",\n\"address\" :{\n\"country\" : \"country\",\n\"city\" : \"city\",\n\"zip\" : \"123\",\n},\n\"lastLogin\" : \"2018-10-05T14:48:00.000Z\",\n\"connections\" : [\"4b7f1f77bcfb6cd79943954d\"],\n\"events\" : [\"407e1f77bcfb6cd7994590df\"],\nreviews : [\"07f1f77bcfb6cd79943910e\"],\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/users.js",
    "groupTitle": "Users",
    "name": "GetUsersUseridId"
  },
  {
    "type": "post",
    "url": "/users",
    "title": "Add new user",
    "description": "<p>Add a new user</p>",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User Username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>User First Name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>User Last Name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User Email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User Password</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "address",
            "description": "<p>User Address of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "lastLogin",
            "description": "<p>User Last login date</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "connections",
            "description": "<p>User Users connected with the user</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "events",
            "description": "<p>User Events associated with the user</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "reviews",
            "description": "<p>by the user User Reviews by the user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "new user",
          "content": "{\n\"username\": \"username\",\n\"firstName\" : \"firstname\",\n\"lastName\" : \"lastname\",\n\"email\" : \"email@mail.mail\",\n\"password\" : \"sajdhsdhjkas\",\n\"address\" :{\n\"country\" : \"country\",\n\"city\" : \"city\",\n\"zip\" : \"123\",\n},\n\"lastLogin\" : \"2018-10-05T14:48:00.000Z\",\n\"connections\" : [\"4b7f1f77bcfb6cd79943954d\"],\n\"events\" : [\"407e1f77bcfb6cd7994590df\"],\nreviews : [\"07f1f77bcfb6cd79943910e\"],\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User Username</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>User First Name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>User Last Name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User Email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User Password</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "address",
            "description": "<p>User Address of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "lastLogin",
            "description": "<p>User Last login date</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "connections",
            "description": "<p>User Users connected with the user</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "events",
            "description": "<p>User Events associated with the user</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "reviews",
            "description": "<p>by the user User Reviews by the user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 OK\n{\n\"username\": \"username\",\n\"firstName\" : \"firstname\",\n\"lastName\" : \"lastname\",\n\"email\" : \"email@mail.mail\",\n\"password\" : \"sajdhsdhjkas\",\n\"address\" :{\n\"country\" : \"country\",\n\"city\" : \"city\",\n\"zip\" : \"123\",\n},\n\"lastLogin\" : \"2018-10-05T14:48:00.000Z\",\n\"connections\" : [\"4b7f1f77bcfb6cd79943954d\"],\n\"events\" : [\"407e1f77bcfb6cd7994590df\"],\nreviews : [\"07f1f77bcfb6cd79943910e\"],\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/users.js",
    "groupTitle": "Users",
    "name": "PostUsers"
  },
  {
    "type": "post",
    "url": "/users/:id",
    "title": "Update user with given id",
    "description": "<p>Update user details, connections, events and reviews</p>",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "id",
            "description": "<p>User id to update</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User Username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>User First Name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>User Last Name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User Email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User Password</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "address",
            "description": "<p>User Address of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "lastLogin",
            "description": "<p>User Last login date</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "connections",
            "description": "<p>User Users connected with the user</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "events",
            "description": "<p>User Events associated with the user</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "reviews",
            "description": "<p>by the user User Reviews by the user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "new user",
          "content": "{\n\"username\": \"username\",\n\"firstName\" : \"firstname\",\n\"lastName\" : \"lastname\",\n\"email\" : \"email@mail.mail\",\n\"password\" : \"sajdhsdhjkas\",\n\"address\" :{\n\"country\" : \"country\",\n\"city\" : \"city\",\n\"zip\" : \"123\",\n},\n\"lastLogin\" : \"2018-10-05T14:48:00.000Z\",\n\"connections\" : [\"4b7f1f77bcfb6cd79943954d\"],\n\"events\" : [\"407e1f77bcfb6cd7994590df\"],\nreviews : [\"07f1f77bcfb6cd79943910e\"],\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User Username</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>User First Name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>User Last Name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User Email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User Password</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "address",
            "description": "<p>User Address of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "lastLogin",
            "description": "<p>User Last login date</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "connections",
            "description": "<p>User Users connected with the user</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "events",
            "description": "<p>User Events associated with the user</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "reviews",
            "description": "<p>by the user User Reviews by the user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 OK\n{\n\"username\": \"username\",\n\"firstName\" : \"firstname\",\n\"lastName\" : \"lastname\",\n\"email\" : \"email@mail.mail\",\n\"password\" : \"sajdhsdhjkas\",\n\"address\" :{\n\"country\" : \"country\",\n\"city\" : \"city\",\n\"zip\" : \"123\",\n},\n\"lastLogin\" : \"2018-10-05T14:48:00.000Z\",\n\"connections\" : [\"4b7f1f77bcfb6cd79943954d\"],\n\"events\" : [\"407e1f77bcfb6cd7994590df\"],\nreviews : [\"07f1f77bcfb6cd79943910e\"],\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/users.js",
    "groupTitle": "Users",
    "name": "PostUsersId"
  }
] });
