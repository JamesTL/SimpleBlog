import { HotDocsBlogPage } from './app.po';

describe('hot-docs-blog App', () => {
  let page: HotDocsBlogPage;

  beforeEach(() => {
    page = new HotDocsBlogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Blog Listing');
  });
});
