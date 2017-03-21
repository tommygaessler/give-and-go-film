import { GiveAndGoPage } from './app.po';

describe('give-and-go App', () => {
  let page: GiveAndGoPage;

  beforeEach(() => {
    page = new GiveAndGoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
