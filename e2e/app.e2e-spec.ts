import { FrontNostalePage } from './app.po';

describe('front-nostale App', () => {
  let page: FrontNostalePage;

  beforeEach(() => {
    page = new FrontNostalePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
