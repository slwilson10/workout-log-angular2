var page = require('webpage').create();
var url = 'https://www.fitbit.com/activities';

page.open(url, function(status) {
  page.includeJs('https://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js', function() {
    var title = page.evaluate(function() {
      return document.title;
    });
    page.evaluate(function() {
      var $loginForm = $('#loginForm');
      $loginForm.find('input[name="email"]').val('slwilson10@gmail.com');
      $loginForm.find('input[name="password"]').val('Foreshadow3821');
      $loginForm.submit();
    });
    console.log('Page title is ' + title);

    setTimeout(function(){
      var newTitle = page.evaluate(function() {
        return document.title;
      });
      console.log('Page headline is ' + newTitle);
      phantom.exit();
    }, 10000);
  });
});
