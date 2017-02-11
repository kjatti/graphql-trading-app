import { GraphqlTradingPage } from './app.po';

describe('graphql-trading App', function() {
  let page: GraphqlTradingPage;

  beforeEach(() => {
    page = new GraphqlTradingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
