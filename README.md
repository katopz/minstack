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

# Domain
- [ ] [NameCheap](https://www.namecheap.com/?aff=99054)
- [ ] [Sub domain](http://blog.karlsolgard.net/how-i-set-up-this-subdomain-in-nginx-on-digital-ocean/)
- [ ] [Setup mail forwarding in postfix on Ubuntu or Debian](http://www.binarytides.com/postfix-mail-forwarding-debian/)
- [ ] [Configuring Mailgun DNS entries on Digital Ocean](http://dangeroustestlab.net/configuring-mailgun-dns-on-digital-ocean/)
- [ ] [Domain Sharding](http://calendar.perfplanet.com/2013/reducing-domain-sharding/)
- [ ] CDN : [cloudflare](https://www.cloudflare.com)

# Server
- [ ] Static Page : Jekyll via [Github Page](https://www.npmjs.com/package/gh-pages)
- [ ] Prerender Data : [Octokat](https://github.com/philschatz/octokat.js)
- [ ] Master Database : [DigitalOcean](https://www.digitalocean.com/?refcode=6dcfcc2a3392)
- [ ] Slave Database : [mlabs](https://mlab.com)

# UI
- [ ] [Material-UI](https://github.com/developit/preact-mdl)

# Authentication
- [ ] [pouchdb-authentication](https://github.com/nolanlawson/pouchdb-authentication)
- [ ] [redux-auth](https://github.com/lynndylanhurley/redux-auth)

# Bundler
- [x] [Webpack](https://github.com/webpack/webpack)
- [ ] [Rollup](https://github.com/rollup/rollup)

# Application
- [ ] Desktop : [Electron](https://github.com/atom/electron),  [hello-electron-with-pouchdb](https://github.com/nolanlawson/hello-electron-with-pouchdb)
- [ ] Mobile : react-native, cordova

# HTTP/2+SSL
```
$ sudo nano /etc/nginx/conf.d/default.conf
```
- [x] [/etc/nginx/conf.d/default.conf](https://gist.github.com/katopz/0942b530212f81c3a8b0a9dc57a05d89)
- [x] [letsecure.me](https://letsecure.me/secure-web-deployment-with-lets-encrypt-and-nginx/)
- [x] Github Page SSL : [CloudFlare](https://rck.ms/jekyll-github-pages-custom-domain-gandi-https-ssl-cloudflare/)
- [x] [optimize](https://www.digitalocean.com/community/tutorials/how-to-optimize-nginx-configuration)

# Nginx Config
```
$ sudo nano /etc/nginx/nginx.conf
```
- [x] [/etc/nginx/nginx.conf](https://gist.github.com/katopz/576e19256b4b5a3bf0e131a60c20d27b)
- [x] [gzip](https://mattstauffer.co/blog/enabling-gzip-on-nginx-servers-including-laravel-forge)
- [ ] [optimize](https://leandromoreira.com.br/2015/10/12/how-to-optimize-nginx-configuration-for-http2-tls-ssl/)

# Maintain
- [ ] [Zero down time](http://jasonwilder.com/blog/2014/07/15/docker-service-discovery/)
- [ ] [Error Page](https://www.digitalocean.com/community/tutorials/how-to-configure-nginx-to-use-custom-error-pages-on-ubuntu-14-04)
- [ ] [PM2](https://github.com/Unitech/pm2)

# Environments
- [x] [ES6](http://es6-features.org/)
- [x] [Babel](https://github.com/babel/babel)
- [ ] [rucksack](https://github.com/simplaio/rucksack)

# Development
- [ ] [ESLint](http://eslint.org/)
- [ ] [Karma + Mocha](https://github.com/karma-runner/karma-mocha)
- [ ] [istanbul](https://github.com/gotwarlost/istanbul) for code coverage analysis
- [ ] [docco](http://jashkenas.github.io/docco/) for developer documentation
- [ ] [bunyan](https://github.com/trentm/node-bunyan) for logging
- [x] [Hot Module Replacement](https://webpack.github.io/docs/hot-module-replacement.html)
- [ ] [Server Side Rendering](https://webpack.github.io/docs/hot-module-replacement.html)

# Offline Capabilities
- [ ] [Service Worker](https://github.com/TalAter/UpUp)
- [ ] [localForage](mozilla.github.io/localForage)

# Sync Capabilities
- [x] [PouchDB](https://github.com/pouchdb/pouchdb)

# Starter
- [x] [preact-todomvc](https://github.com/developit/preact-todomvc)
- [ ] [mern](https://github.com/Hashnode/mern-starter)
