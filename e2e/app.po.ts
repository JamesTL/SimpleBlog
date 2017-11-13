import { browser, element, by } from 'protractor';

export class HotDocsBlogPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
  getHomeLeadParagraphText(){
    return element(by.css('[data-test-el="homeLeadText"]')).getText();
  }

  getAllBlogListings(){
    return element.all(by.css('[data-test-el="blogListingCard"]'));
  }
}
