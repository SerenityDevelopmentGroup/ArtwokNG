import { ArtworkNGPage } from './app.po';

describe('artwork-ng App', function() {
  let page: ArtworkNGPage;

  beforeEach(() => {
    page = new ArtworkNGPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
