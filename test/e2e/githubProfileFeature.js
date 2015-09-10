describe('GitHub profile finder', function() {

  var searchBox = element(by.model('searchTerm'))
  var searchButton = element(by.className('btn'))

  beforeEach(function() {
    browser.get('http://localhost:8080');
  })

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('Github user search');
  });


  it('finds profiles', function() {
    searchBox.sendKeys('spike');
    searchButton.click();
    var profiles = element.all(by.repeater('user searchResult.items'));
    expect(profiles.get(1).getText()).toEqual('spike01');
  });

});
