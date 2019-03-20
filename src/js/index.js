$(document).ready(function () {
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  });

  $('.btn-custom .description').click(function () {
    $('.btn-custom .description').removeClass('active');
    $(this).addClass('active');
  })
});
