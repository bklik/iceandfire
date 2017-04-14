import { ApiTestPage } from './app.po';

describe('api-test App', () => {
  let page: ApiTestPage;

  beforeEach(() => {
    page = new ApiTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
