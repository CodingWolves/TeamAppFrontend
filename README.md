# .................................................. #
First you need to install all the dependencies of the project with command `npm install`.

**Browser** - To run on browser, run command `npm start`.

**Android** - To run on android, you may need the following softwares installed and added to environment variables.
1. JDK 8
2. Gradle
3. Android Studio / SDKManager

## React Development

You can run a regular react development live server with command :

`npm run react`

**\*** *Cordova plugins will not work this way*

## Build

To build use `npm run build` which will build the react project and transfer it to 'www' folder for cordova.

## Run

To **build** and then **run** the project, use commands:

1. Android - `npm run ba` (will start an emulator if android phone is not connected correctly).
2. Browser - `npm run bb` or `npm start`.

To **run** the project after a build was made, use commands:

1. Android - `npm run a` (will start an emulator if android phone is not connected correctly).
2. Browser - `npm run b`.