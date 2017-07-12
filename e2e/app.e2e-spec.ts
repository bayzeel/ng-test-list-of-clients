import { NgTestListOfClientsPage } from './app.po';

describe('ng-test-list-of-clients App', () => {
  let page: NgTestListOfClientsPage;

  beforeEach(() => {
    page = new NgTestListOfClientsPage();
  });

  it('should display first paragraph "Liana"', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Liana');
  });
});
