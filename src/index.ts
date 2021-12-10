import Cache from './classes/cache';

import getRandom from './utils/getRandom';

const cache = new Cache();

export async function getAllCategories() {
  await cache.fetchCategories();

  return cache.categories;
}

export async function getRandomCategory(nb: number = 1) {
  await cache.fetchCategories();

  return getRandom(cache.categories, nb);
}

export async function getAllApis() {
  await cache.fetchApis();

  return cache.apis;
}

export async function getRandomApi(nb: number = 1) {
  await cache.fetchApis();

  return getRandom(cache.apis, nb);
}

export async function getNumberOfApis() {
  await cache.fetchApis();

  return cache.count;
}
