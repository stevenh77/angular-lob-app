import { AngularLobAppPage } from './app.po';

describe('angular-lob-app App', () => {
  let page: AngularLobAppPage;

  beforeEach(() => {
    page = new AngularLobAppPage();
  });

  it('should display title saying Angular LOB App', () => {
    page.navigateTo();
    expect<any>(page.getTitleText()).toEqual('Angular LOB App');
  });
});
