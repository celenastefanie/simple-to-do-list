var $input = $('#simplelist');
var $list = $('.list');

$('form').on('submit', function (e) {
  var $li = $('<li>');

  e.preventDefault();
  $li.html($input.val());
  $input.val('');
  $list.append($li);
});

$list.on('click', 'li', function (e) {
  $(this).toggleClass('is-clicked');
});
