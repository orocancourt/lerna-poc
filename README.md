# randstad-front

> Randstad YPAM application to manage medical resources

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

# start bff at localhost:9100
yarn start

# start bff (without pm2) at localhost:9100
yarn start:dev

# start bff with watch at localhost:9100
yarn start:watch

# serve front with hot reload at localhost:8888
yarn start:front

# build for production with minification
yarn build

# stop BFF server
yarn run stop
```

Check BFF server is up at URL http://localhost:9100/api/status

## Lint and Test
```

# start linter
yarn lint

# fix linter errors
yarn lint:fix

# run all tests
yarn test
```

## Environment variables

#### BFF
Variables are set in .env file at the root of the folder.
A file .env.example is available to indicate variables name.

#### Front
Variables are set in config/*.env.js

## Developers configuration

#### Running tests on IDEA

 * `Run` > `Edit Configurations...` > `Edit Defaults` > `Jest` > `Working directory` > Select the folder `front`

#### Recommended plugins to install

 * [String Manipulation](https://plugins.jetbrains.com/plugin/2162-string-manipulation)
 * [Vue.js](https://plugins.jetbrains.com/plugin/9442-vue-js)
 * Sass support
 
#### Setting preferences for Javascript code style

 * Go to `Preferences` > `Languages & Frameworks` > `JavaScript`
   1. `JavaScript language version` > Select __`ECMAScript 6`__
   2. \> `Libraries` > `Download` > Select __`jest`__ from `TypeScript community stubs` > `Download and Install` > `OK`
   3. \> `Code Quality Tools` > `ESLint` > Check __`Enable`__
   > You need to start `yarn` first to let IntelliJ find the path to `node` and `eslint`

#### Running/Debugging with IntelliJ IDEs

###### Front configuration:

* Click on the empty select dropdown at the top right corner of IDE
* Choose `Edit Configurations`
* Click on `+` button
* Choose `Jest`
* In `Name`, write `Front: All tests`
* In `Configuration file`, write the path to your jest configuration json file:  `~/randstad-front/front/config/jest.config.json`
* In `jest package`, write the path to your jest folder in the node_modules: `~/randstad-front/front/node_modules/jest`

It will allow you to run tests inside your IDE. You can apply the same settings for the BFF.

Run test (Ctrl + R or the green play triangle icon)