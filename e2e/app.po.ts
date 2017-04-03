import { browser, element, by } from 'protractor';

export class AngularLobAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getTitleText() {
    return element(by.css('app-root nav .navbar-brand')).getText();
  }
}
