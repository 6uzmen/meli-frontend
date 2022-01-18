# MercadoLibre Frontend

# TypeScript + Next.js

# Environment vars

This project uses the following environment variables:

| Name              | Default Value             |
| ----------------- | ------------------------- |
| REACT_APP_API_URL | http://localhost:3001/api |

# Pre-requisites

- Install [Node.js](https://nodejs.org/en/) version 16.6.2

# Getting started

- Install dependencies

```
yarn install
```

- Build and run the project

```
yarn dev
```

## Project Structure

| Name                  | Description                                                                                      |
| --------------------- | ------------------------------------------------------------------------------------------------ |
| **node_modules**      | Contains all npm dependencies                                                                    |
| **src**               | Contains source code that will be compiled to the dist dir                                       |
| **src/components**    | All de components used in src/Pages                                                              |
| **src/pages**         | Contains all the App Views                                                                       |
| **src/public/assets** | Contains all the assets used locally                                                             |
| **src/services**      | Contain all the api calls used in the App                                                        |
| **src/utils**         | Helpfull functions used in the Application                                                       |
| package.json          | Contains npm dependencies as well as [build scripts](#what-if-a-library-isnt-on-definitelytyped) |
| tsconfig.json         | Config settings for compiling source code only written in TypeScript                             |
| .eslintrc.json        | Config settings for EsLint code style checking                                                   |
| prettier.rc           | Config settings for Prettier code style checking                                                 |
| next.config.js        | Addition NextJs config                                                                           |
