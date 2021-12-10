# get-random-api
<a href="https://codeclimate.com/github/theyadev/random-api/maintainability"><img src="https://api.codeclimate.com/v1/badges/65bd89c7dad927f32a61/maintainability" /></a>

A simple and lightweight module to get random api

## Installation

`npm i --save get-random-api`

## Documentation

Import what you need !

#### Javascript

```js
const { getAllApis, getRandomApi, getAllCategories, getRandomCategory, getNumberOfApis } = require("get-random-api")
```

#### Typescript

```ts
import { getAllApis, getRandomApi, getAllCategories, getRandomCategory, getNumberOfApis } from "get-random-api";
```

### Usage

#### getAllApis
```js
const apis = await getAllApis()
```
#### getRandomApi
```js
const randomApis = await getRandomApi(number)
```

#### getAllCategories
```js
const categories = await getAllCategories()
```
#### getRandomCategory
```js
const randomCategories = await getRandomCategory(number)
```
#### getNumberOfApis
```js
const count = await getNumberOfApis()
```
