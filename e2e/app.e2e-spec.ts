import { RtvAppPage } from './app.po';

describe('rtv-app App', function() {
  let page: RtvAppPage;

  beforeEach(() => {
    page = new RtvAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
