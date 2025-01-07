export const createPageFixture =
  PageType =>
  async ({page}, use) =>
    await use(new PageType(page));