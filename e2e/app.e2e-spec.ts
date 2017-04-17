import { AppointmentsPage } from './app.po';

describe('appointments App', () => {
  let page: AppointmentsPage;

  beforeEach(() => {
    page = new AppointmentsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
