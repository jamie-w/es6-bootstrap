**Deprecated! Discarded in favor of [jwjs](https://bitbucket.org/_jweatherby/jwjs) and [jwjs-app](https://bitbucket.org/_jweatherby/jwjs-app)**

JW-Framework
============

Purpose
-------

Create an all around front-end development experience. The point of this system
is to provide a simple pluggable/testable system in front of an api. It includes
basic functionality and examples of react dom rendering and api requests.

A primary reasoning here is the backend system is dumb. The client will
handle the front-end logic (via redux), displaying appropriately depending what
comes through the backend. The backend's primary purpose is to communicate
with the api (which will handle most of the business logic).

Generators are heavily used on both the backend and the frontend as they are the
most testable components. Everything is mocked with generators!

Main Components
---------------

**Core**

- ExpressJS (https://github.com/expressjs/express)
- React (https://github.com/facebook/react)
- Redux (https://github.com/reactjs/redux)
- Redux-sagas (https://github.com/yelouafi/redux-saga)
- axios (https://github.com/chaijs/chai)
- csurf (https://github.com/expressjs/csurf)

**Testing**

- mocha (https://github.com/mochajs/mocha)
- chai (https://github.com/chaijs/chai)
