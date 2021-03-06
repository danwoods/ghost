// # Ghost Configuration
// Setup your Ghost install for various environments

var path = require('path'),
    config;

config = {
    // ### Development **(default)**
    development: {
        // The url to use when providing links to the site, E.g. in RSS and email.
        url: 'http://mighty-reef-6516.herokuapp.com',

        mail: {
          transport: 'sendgrid',
          host: 'smtp.sendgrid.net',
          options: {
            service: 'Sendgrid',
            auth: {
              user: process.env.SENDGRID_USERNAME,
              pass: process.env.SENDGRID_PASSWORD
            }
          }
        },
/*
        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/content/data/ghost-dev.db')
            },
            debug: false
        },
*/
        database: {
            client: 'postgres',
            connection: {
                  host: 'ec2-54-197-251-18.compute-1.amazonaws.com',
                  user: 'pwuklinxwqxopa',
                  password: process.env.PG_PASS,
                  database: 'd9cmnhmn55b337',
                  port: '5432'
            }
        },
        server: {
            // Host to be passed to node's `net.Server#listen()`
            //host: '127.0.0.1',
            host: '0.0.0.0',
            // Port to be passed to node's `net.Server#listen()`, for iisnode set this to `process.env.PORT`
            //port: '2368'
            //port: '8080'
            port: process.env.PORT
        }
    },

    // ### Production
    // When running Ghost in the wild, use the production environment
    // Configure your URL and mail settings here
    production: {
        url: 'http://my-ghost-blog.com',
        mail: {
          transport: 'sendgrid',
          host: 'smtp.sendgrid.net',
          options: {
            service: 'Sendgrid',
            auth: {
              user: process.env.SENDGRID_USERNAME,
              pass: process.env.SENDGRID_PASSWORD
            }
          }
        },
/*
        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/content/data/ghost.db')
            },
            debug: false
        },
*/
        database: {
            client: 'postgres',
            connection: {
                  host: 'ec2-54-197-251-18.compute-1.amazonaws.com',
                  user: 'pwuklinxwqxopa',
                  password: process.env.PG_PASS,
                  database: 'd9cmnhmn55b337',
                  port: '5432'
            }
        },
        server: {
            // Host to be passed to node's `net.Server#listen()`
            host: '127.0.0.1',
            // Port to be passed to node's `net.Server#listen()`, for iisnode set this to `process.env.PORT`
            //port: '2368'
            port: process.env.PORT
        }
    },

    // **Developers only need to edit below here**

    // ### Testing
    // Used when developing Ghost to run tests and check the health of Ghost
    // Uses a different port number
    testing: {
        url: 'http://127.0.0.1:2369',
        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/content/data/ghost-test.db')
            }
        },
        server: {
            host: '127.0.0.1',
            port: '2369'
        }
    },

    // ### Travis
    // Automated testing run through GitHub
    'travis-sqlite3': {
        url: 'http://127.0.0.1:2369',
        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/content/data/ghost-travis.db')
            }
        },
        server: {
            host: '127.0.0.1',
            port: '2369'
        }
    },

    // ### Travis
    // Automated testing run through GitHub
    'travis-mysql': {
        url: 'http://127.0.0.1:2369',
        database: {
            client: 'mysql',
            connection: {
                host     : '127.0.0.1',
                user     : 'travis',
                password : '',
                database : 'ghost_travis',
                charset  : 'utf8'
            }
        },
        server: {
            host: '127.0.0.1',
            port: '2369'
        }
    },

    // ### Travis
    // Automated testing run through GitHub
    'travis-pg': {
        url: 'http://127.0.0.1:2369',
        database: {
            client: 'pg',
            connection: {
                host     : '127.0.0.1',
                user     : 'postgres',
                password : '',
                database : 'ghost_travis',
                charset  : 'utf8'
            }
        },
        server: {
            host: '127.0.0.1',
            port: '2369'
        }
    }
};

// Export config
module.exports = config;
