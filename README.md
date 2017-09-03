# nodezoo-suggest

This is a repository in the microservice demonstration system for
the [Tao of Microservices](//bit.ly/rmtaomicro) book (chapter 9). This
code is live at [nodezoo.com](http://nodezoo.com). To get started,
visit the [nodezoo/tao](//github.com/nodezoo/tao) repository.

__This microservice provides the search suggestion functionality.__


## Running

To run this microservice normally, use the tooling describing in
the [nodezoo/tao](/nodezoo/tao) repository, which shows you how to run
the entire system of microservices (of which this is only one of many) in
production ([Kubernetes](//kubernetes.io)), staging
([Docker](//docker.com)), and development
([fuge](//github.com/apparatus/fuge)) modes.

To run from the terminal for testing and debugging, see
the [Running from the terminal](#running-from-the-terminal) section
below.


## Message flows

This microservice acts on the `Accepted` message patterns, performing
appropriate business `Actions`, as a result of which, new messages are
possibly `Sent`.

|Accepted |Actions |Sent
|--|--|--
|`role:suggest,cmd:add (AO)` |Add query to suggestions |
|`role:suggest,cmd:add (SC)` |Provide a list of suggestions |


## Running from the terminal

This microserive is written in [node.js](//nodejs.org), which you
will need to download and install. Fork and checkout this repository,
and then run `npm` inside the repository folder to install its dependencies:

```sh
$ npm install
```

To run this microservice separately, for development, debug, or
testing purposes, use the service scripts in the [`srv`](srv) folder:

* [`suggest-dev.js`](srv/suggest-dev.js) : run the development configuration 
  with hard-coded network ports.

  ```sh
  $ node srv/suggest-dev.js
  ```

  This script listens for messages on port 9060 and provides a REPL on
  port 10060 (try `$ telnet localhost 10060`).

  A [seneca-mesh](//github.com/senecajs/seneca-mesh) version, for
  testing purposes, is also shown in the
  script [`suggest-dev-mesh.js`](srv/suggest-dev-mesh.js). For more on
  this, see the [nodezoo-repl](//github.com/nodezoo/nodezoo-repl)
  repository.

* [`suggest-stage.js`](srv/suggest-stage.js) : run the staging
  configuration. This configuration is intended to run in a Docker
  container so listens on port 9000 by default, but you can change
  that by providing an optional argument to the script.

  ```sh
  $ node srv/suggest-stage.js [PORT]
  ```

* [`suggest-prod.js`](srv/suggest-prod.js) : run the production
  configuration. This configuration is intended to run under
  Kubernetes in a [seneca-mesh](//github.com/senecajs/seneca-mesh)
  network. If running in a terminal (only do this for testing), you'll
  need to provide the mesh base nodes in the `BASES` environment
  variable.

  ```sh
  $ BASES=x.x.x.x:port node srv/suggest-prod.js
  ```



  
