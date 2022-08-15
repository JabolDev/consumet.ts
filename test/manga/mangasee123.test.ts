import { MANGA } from '../../src/providers';

jest.setTimeout(120000);

// run: yarn test --watch --verbose false mangasee123.test.ts

test('Search: returns a filled array of manga.', async () => {
  const mangasee123 = new MANGA.Mangasee123();
  const data = await mangasee123.search('Call of the Night');

  console.log(data);

  expect(data.results).not.toEqual([]);
});

test('fetchMangaInfo: returns filled manga info when given a mangaId.', async () => {
  const mangasee123 = new MANGA.Mangasee123();
  const data = await mangasee123.fetchMangaInfo('Yofukashi-no-Uta');

  console.log(data);

  expect(data).not.toEqual({});
});

test('fetchChapterPages: returns filled page data when given a chapterId.', async () => {
  const mangasee123 = new MANGA.Mangasee123();
  const data = await mangasee123.fetchChapterPages('Yofukashi-no-Uta-chapter-1');

  console.log(data);

  expect(data).not.toEqual({});
});