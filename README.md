# Stack
* [Preact](https://github.com/developit/preact)
* [Redux](https://github.com/reactjs/redux)
* [PouchDB](https://github.com/pouchdb/pouchdb)

# Prerequisites
* [NodeJS](https://nodejs.org)
* [CouchDB](https://couchdb.apache.org/)

# Run
* Debug
```shell
$ npm run dev
```
* Release
```shell
$ npm run release
```

# Development 
## Local Server
* Development with `PouchDB`
```shell
$ npm install -g pouchdb-server
$ pouchdb-server --port 5984
```
* Development with `CouchDB`
```shell
$ brew install couchdb
```
## Remote Server
```shell
$ sudo apt-get install couchdb
```

# UI
- [ ] [Material-UI](https://github.com/callemall/material-ui)

# Bundler
- [x] [Webpack](https://github.com/webpack/webpack)
- [ ] [Rollup](https://github.com/rollup/rollup)

# Data Center
- [ ] Static Page : Jekyll via Github Page
- [ ] Prerender Data : [Octokat](https://github.com/philschatz/octokat.js)
- [ ] Master Database : [DigitalOcean](https://www.digitalocean.com)
- [ ] Slave Database : [mlabs](https://mlab.com)

# Application
- [ ] Desktop : [Electron](https://github.com/atom/electron)
- [ ] Mobile : react-native, cordova

# Speed
- [ ] https://developers.google.com/speed/
- [ ] CDN : [cloudflare](https://www.cloudflare.com)

# Secure
- [x] Protocol : HTTP2, [SSL](https://github.com/letsencrypt/letsencrypt) https://letsecure.me/secure-web-deployment-with-lets-encrypt-and-nginx/

# Environments
- [x] [ES6](http://es6-features.org/)
- [x] [Babel](https://github.com/babel/babel)
- [ ] [rucksack](https://github.com/simplaio/rucksack)

# Development
- [ ] [ESLint](http://eslint.org/)
- [ ] [Karma + Mocha](https://github.com/karma-runner/karma-mocha)
- [x] [Hot Module Replacement](https://webpack.github.io/docs/hot-module-replacement.html)
- [ ] [Server Side Rendering](https://webpack.github.io/docs/hot-module-replacement.html)

# Offline Capabilities
- [ ] [Service Worker](https://github.com/TalAter/UpUp)
- [ ] [localForage](mozilla.github.io/localForage)

# Sync Capabilities
- [ ] [lowladb](https://github.com/lowla/lowladb-json-database)

# Starter
- [x] [preact-todomvc](https://github.com/developit/preact-todomvc)
- [ ] [mern](https://github.com/Hashnode/mern-starter)
