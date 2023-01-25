# Auth-Authorization-API

## Introduction

Here we can register as a new user and LogIn as a existing user via REST APIs.

<br/>

## Features
- While SignUp not actual password store. store hashed password
- We use JWT Auth to Authenticate
- When the user successfully logIn It got the token . Known as AccessToken
- All input value must be valid its check by npm package Express-validator
 

<br/>

## Hosted (Deployed ) URL
 - **https://a2-login-restapis.onrender.com**
 This is the main Home deployed URL link.

## Routes & URL

- **https://a2-login-restapis.onrender.com/api/v1/register**
  <p>To register as a new user</p>
  **we need to paas some values**
  *name , email , pass , confirm_pass*
  *Please make sure or field value must valid*


- **https://a2-login-restapis.onrender.com/api/v1/login**
  <p>To login as a existing user</p>
  **we need to paas some values**
  *email , pass*
  *Please make sure or field value must valid*
  <br/>
  
  - **https://a2-login-restapis.onrender.com/api/v1/profile**
  <p>To see profile of logged in user</p>
  **we don't to paas authToken if you test on postman**
  <br/>
  
  - **https://a2-login-restapis.onrender.com/api/v1/logout**
  <p>to loggin out</p>
  **we don't to paas authToken if you test on postman**
  <br/>

## Tools Used
- Create server : *Express*
- Mongodb for storing user details
- Data validation : *Express-validator*
- Private url or data : *ENV*
- Postman for testing
- Version Control System: *Git*
- VCS Hosting: *GitHub*
- Integrated Development Environment: *VSCode*
  <br/>
  <br/>

## Requirements

For development, you will only need Node.js and a node global package installed in your environement and mongodb for database.

### Node

- Node Installtion on Windows
  Go on to the [official Node.js website](https://nodejs.org/en/) and download the installer. Also, be sure to have `.git` available in your PATH,
  `npm` might need it (You can find [git](https://git-scm.com/)).
- Other operating System
  You can find more information about the installation on the official [Node.js website](https://nodejs.org/en/) and the official [NPM website](https://www.npmjs.com/).

If the installation was successful, you should be able to run the following command.

```
$ node --version
v16.13.0

$ npm --version
8.2.0
```

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

```
$ npm install npm -g

```

<br/>

## To run the project on your local machine:

1. Open terminal.

2. Change the current working directory to the location where you want the cloned directory.

   ```
   $ git clone https://github.com/Uvais-Ahmad/Auth-Authorization-API

   ```

3. Install all the dependencies by running :

   ```
   npm install

   ```

4. Run npm start to run the project at local host, port 8000:

   ```
   $ npm start

   ```

<br/>
