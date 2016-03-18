var $input = $('#toDo');
var $list = $('.list');

$('form').on('submit', function (e) {
  var $li = $('<li>');

  e.preventDefault();
  $li.html($input.val());
  $list.append($li);
});

$toDo.on('click', 'li', function (e) {
  $(this).toggleClass('is-clicked');
});
