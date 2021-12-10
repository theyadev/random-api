import { getRandomApi, getNumberOfApis, getAllApis } from '../index';

test('API, COUNT', async () => {
  expect((await getAllApis()).length).toBe(await getNumberOfApis());
});

test('API Random', async () => {
  expect((await getRandomApi(5)).length).toBe(5);
});
