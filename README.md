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

    $ npm start

## Configuration

config.dist.js contains an example of configuration

    Edit config.dist.js and rename it to config.js


## Related Projects

* [CPA Authentication Provider](https://github.com/ebu/cpa-auth-provider)
* [CPA Service Provider](https://github.com/ebu/cpa-service-provider)
* [CPA Client](https://github.com/ebu/cpa-client)


## Contributors

* [Michael Barroco](https://github.com/barroco) (EBU)


## Copyright & License

Copyright (c) 2014, EBU-UER Technology & Innovation

The code is under BSD (3-Clause) License. (see LICENSE.txt)
