import { AngularLobAppPage } from './app.po';

describe('angular-lob-app App', () => {
  let page: AngularLobAppPage;

  beforeEach(() => {
    page = new AngularLobAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
