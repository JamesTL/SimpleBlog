import { HotDocsBlogPage } from './app.po';

describe('hot-docs-blog App', () => {
    let page:HotDocsBlogPage;

    beforeEach(() => {
        page = new HotDocsBlogPage();
    });

    it('should display message saying app works', () => {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('Blog Listing');
    });

    it('should display lead paragraph text', ()=> {

        page.navigateTo();
        expect(page.getHomeLeadParagraphText()).toEqual('There are 10 available blogs. Select a user and view their blog');
    })

    it('should list correct number of blogs', ()=> {
        page.navigateTo();
        let expectedResult = page.getAllBlogListings().count();

        expect(expectedResult).toBe(10);

    });

    it('should display correct blog link has been clicked', ()=>{


    });
});
