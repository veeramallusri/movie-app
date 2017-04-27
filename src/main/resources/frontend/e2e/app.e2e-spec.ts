import { MichaelMovieManagerPage } from './app.po';

describe('michael-movie-manager App', () => {
  let page: MichaelMovieManagerPage;

  beforeEach(() => {
    page = new MichaelMovieManagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
