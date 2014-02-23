# http-reverseproxy

This project implements a simple reverse proxy which distributes the requests according to the hostname.

We use it to build demonstrators on virtual machines running different servers of a distributed system.

The project is widely based on [node-http-proxy](https://github.com/nodejitsu/node-http-proxy)

More information on [EBU developments](http://www.ebu.io)


## Prerequisites

Ensure your system has [Node.js](http://nodejs.org/) and NPM installed.

## Getting Started

    $ git clone https://github.com/ebu/http-reverseproxy.git
    $ cd http-reverseproxy
    $ npm install

## Start the Server

  Edit `config.dist.js` and rename it to `config.js to run the server

    $ npm start


## Configuration

    var config = {
      listening_port: 80,
      https: {
        listening_port: 443,
        key: '', // SSL Private key
        cert: '' // SSL Public certificate
      },
      backend_servers: [
        {
          'local_port': 8080,
          'origin_host': 'www.ebu.io'
        },
        {
          'local_port': 8081,
          'origin_host': 'bbc1.ebu.io'
        },
        {
          'local_port': 8082,
          'origin_host': 'bbc2.ebu.io'
        }
      ],
      fallback_port: 8090 | null,
      error_message: 'The system is down.\n\n2014 - EBU Technology & Innovation - ebu.io'
    };

    module.exports = config;


`listening_port` - Listening port of the reverse proxy

`https` - It enables SSL support on `https.listening_port` using the private key `key` and the public certificate `cert`

`backend_servers` - The request are distributed according to the origin_host to the local port.

`fallback_port` - If no backend_servers rules match the request, the request will be sent to this local port if different than null.
Otherwise an error_message is returned with a status code 500.

`error_message` - Message sent in case of error (ie Backend server doesn't respond.)


## Related Projects

* [CPA Authentication Provider](https://github.com/ebu/cpa-auth-provider)
* [CPA Service Provider](https://github.com/ebu/cpa-service-provider)
* [CPA Client](https://github.com/ebu/cpa-client)


## Contributors

* [Michael Barroco](https://github.com/barroco) (EBU)


## Copyright & License

Copyright (c) 2014, EBU-UER Technology & Innovation

The code is under BSD (3-Clause) License. (see LICENSE.txt)
