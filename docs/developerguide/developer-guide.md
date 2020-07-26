# Developer Guide

- Table of Contents
  - [Installation and Setup](#installation-and-setup)
  - [API Documentation](#api-documentation)
    - [Happiness Breakdowns](./happiness-breakdowns.md "Happiness Breakdowns")
    - [Todos](./todos.md "Todos")
    - [Users](./users.md "Users")
    - [PetInfos](./pet-infos.md "PetInfos")

## Installation and Setup

Remember to add a MONGOURI and SecretOrKey from your mLab database in `.env`.

```
MONGODB_URI=YOUR_MONGO_URI_HERE
secretOrKey=secret
```

Install dependencies for server & client

```
npm install && npm run client-install
```

Run client & server with concurrently

```
npm run dev
```

Server runs on <http://localhost:5000> and client runs on <http://localhost:3000>

## API Documentation

- [Happiness Breakdown](./happiness-breakdowns.md "Happiness Breakdowns")

- [Todos](./todos.md "Todos")

- [Users](./users.md "Users")

- [PetInfos](./pet-infos.md "PetInfos")