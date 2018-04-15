# randstad-front/bff

> Randstad YPAM backend for frontend

## Init environment for development

``` bash
# install Yarn with the good version
npm install -g yarn@1.5.1

# install n to manage node version
yarn global add n

# use good Node version (8.10.0 - LTS)
n 8.10.0

# install good NPM version
yarn global add npm@5.6.0 

# install PM2 to start BFF as a daemon
yarn global add pm2@2.10.2 
```

## Build Setup

``` bash
# install dependencies
yarn

# start (with pm2) at localhost:9100
yarn start

# start (without pm2) at localhost:9100
yarn start:dev

# start (without pm2) with watch at localhost:9100
yarn start:watch

# serve front with hot reload at localhost:8888
yarn start:front

# build for production with minification
yarn build

# stop BFF server
yarn run stop
```

Check server is up at URL http://localhost:9100/api/status

## Environment variables
Variables are set in .env file at the root of the folder.
A file .env.example is available to indicate variables name.
