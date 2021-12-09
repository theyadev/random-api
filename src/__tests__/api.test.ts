import { getRandomApi } from '../index';

test('API Random', async () => {
  expect((await getRandomApi(5)).length).toBe(5);
});
