import { MirrorUiPage } from './app.po';

describe('mirror-ui App', function() {
  let page: MirrorUiPage;

  beforeEach(() => {
    page = new MirrorUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
