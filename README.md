# clima-app
We will consume data from an API to know the temperature that occurs in a city

# Proyect creation
npm init -y

Add to package.json:

"script":{
    "start": "node index.js"
}

Create index.js

Install Color and Inquirer:
npm i color inquirer

Inquirer: Command Line Interface interactive.

For uninstall a package:
npm unistall color

Changing Inquirer version:
npm install inquirer@8.2.4

Request HTTP
npm i axios

# Proyect start
npm start

# Docker
## Build image
docker build -t mi-app-clima .

## Run Container
-i (interactive)
-t (tty)
docker run -it mi-app-clima