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
- [x] [nginx](https://www.digitalocean.com/community/tutorials/how-to-optimize-nginx-configuration)
- [x] [gzip](https://gist.github.com/katopz/576e19256b4b5a3bf0e131a60c20d27b)
- [ ] CDN : [cloudflare](https://www.cloudflare.com)

# Secure
- [x] Protocol : HTTP2, SSL via [letsecure.me](https://letsecure.me/secure-web-deployment-with-lets-encrypt-and-nginx/)
- [x] [HTTP2+SSL // sudo nano /etc/nginx/conf.d/default.conf](https://gist.github.com/katopz/0942b530212f81c3a8b0a9dc57a05d89)

# Solid
- [ ] [Zero down time](http://jasonwilder.com/blog/2014/07/15/docker-service-discovery/)

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
- [ ] [PouchDB](https://github.com/pouchdb/pouchdb)

# Starter
- [x] [preact-todomvc](https://github.com/developit/preact-todomvc)
- [ ] [mern](https://github.com/Hashnode/mern-starter)
