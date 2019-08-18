$('[data-group]').each(function () {
  var $allTarget = $(this).find('[data-target]'),
    $allClick = $(this).find('[data-click]'),
    activeClass = 'active';

  $allTarget.first().addClass(activeClass);
  $allClick.first().addClass(activeClass);

  $allClick.click(function (e) {
    e.preventDefault();

    var id = $(this).data('click'),
      $target = $('[data-target="' + id + '"]');

    $allClick.removeClass(activeClass);
    $allTarget.removeClass(activeClass);

    $target.addClass(activeClass);
    $(this).addClass(activeClass);
  });
});

$('.menu-nav a[href^="#"]').click(function (e) { //[href^="#"] significa selecionar todos os itens que começar om ( # ). Assim podemos usar links externos sem problemas por causa do preventDefault que previne o padrão dos links no site.
  e.preventDefault();
  var id = $(this).attr('href'),
    menuHeight = $('.menu').innerHeight(), //pegar tamanho do menu
  targetOffset = $(id).offset().top;

  $('html, body').animate({
    scrollTop: targetOffset - menuHeight
  }, 500);
});

$('.logo').click(function(e){
  e.preventDefault();
  $('html, body').animate({
    scrollTop: 0
  }, 500)
});


























































