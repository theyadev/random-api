import Cache from './classes/cache';

const cache = new Cache();

export async function getAllCategories() {
  await cache.update();

  const categories: string[] = [];

  for (const api of cache.apis) {
    if (categories.includes(api.Category)) continue;

    categories.push(api.Category);
  }

  return categories;
}

export async function getRandomApi(nb: number = 1) {
  await cache.update();

  const randomSortedApis = cache.apis.sort(() => {
    return Math.random() - 0.5;
  });

  const randomApis = randomSortedApis.splice(0, nb);

  return randomApis;
}
