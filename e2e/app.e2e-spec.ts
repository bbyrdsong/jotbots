import { JotbotPage } from './app.po';

describe('jotbot App', function() {
  let page: JotbotPage;

  beforeEach(() => {
    page = new JotbotPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
