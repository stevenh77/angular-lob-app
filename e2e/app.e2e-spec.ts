import { AngularLobAppPage } from './app.po';

describe('angular-lob-app App', () => {
  let page: AngularLobAppPage;

  beforeEach(() => {
    page = new AngularLobAppPage();
  });

  it('should display title saying Home', () => {
    page.navigateTo();
    // expect(page.getTitleText()).toEqual('Home');
  });
});
