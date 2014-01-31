# http-reverseproxy

This project implements a very simple reverse proxy which distribute the requests using the hostname.

We use it to build demonstrators on virtual machines running different servers of a distributed system.

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
      listening_port: 5000,
      backend_servers:[
        {
          'origin_host': 'www.ebu.io:5000',
          'local_port': 8080
        },
        {
          'origin_host': 'bbc1.ebu.io:5000',
          'local_port': 8081
        },
        {
          'origin_host': 'bbc2.cpalocal.ebu.io:5000',
          'local_port': 8082
        }
      ],
      fallback_port: 8090,
      error_message: 'The system is down.\n\n2014 - EBU Technology & Innovation - ebu.io'
    };

    module.exports = config;


`listening_port` - Listening port of the reverse proxy

`backend_servers` - The request are distributed according to the origin_host to the local port.

`fallback_port` - If fallback_port equals null, error_message is returned with a status code 500.
Otherwise if no backend rules match the request, the reverse proxy will this local port to pass the request.

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
