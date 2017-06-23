import { HomeLibraryPage } from './app.po';

describe('home-library App', () => {
  let page: HomeLibraryPage;

  beforeEach(() => {
    page = new HomeLibraryPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
