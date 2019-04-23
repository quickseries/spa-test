# quick-series
An example of Angular and Express app implementation

This repository intends to provide **Client** and **Server** implementation as described [here](https://github.com/quickseries/spa-test). For the sake of simplicity, it was used only one git repository for both.

### Client
The client uses Angular2+ and Angular Material
* You can set the API endpoint using the "environment.*.ts" file on environments' folder

### Server
The server uses Express and MongoDB. You will need to have MongoDB installed.
* You can set the environment variables using the ".env" file on server's folder

### Example Build

For test purposes only:
```
git clone https://github.com/kernelsafe/quick-series
cd quick-series/server/
npm i
To run the tests: npm run test
To start the server: npm run start

cd ../client/
npm i
To start the client: ng serve --open
```