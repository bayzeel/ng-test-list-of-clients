import { browser, element, by } from 'protractor';

export class NgTestListOfClientsPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root p')).getText();
  }
}
