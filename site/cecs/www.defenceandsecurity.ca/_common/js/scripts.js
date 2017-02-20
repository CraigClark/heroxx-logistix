(function($) {

  $(window).resize(function () {
    if (this.resizeTO) clearTimeout(this.resizeTO);
    this.resizeTO = setTimeout(function () {
      $(this).trigger('resizeEnd');
    }, 250);
  });

	$('#navbar-collapse-2')
	.on('show.bs.offcanvas', function(event) {
		$('#navbar-collapse-1').appendTo('#navbar-collapse-2').removeClass('navbar-offcanvas');
	})
	.on('hide.bs.offcanvas', function(event) {
		$('#navbar-collapse-1').addClass('navbar-offcanvas').appendTo('.navbar-container-1 .container')
	});

  $(window).on('resizeEnd load', function(event) {

    if ($(this).width() > 767) {
      $('#navbar-collapse-1').trigger('hide.bs.offcanvas');
      $('body').removeAttr('style');

      $('.main-menu .dropdown-menu').on('mouseenter',
        function() {
          $(this).parents('.dropdown').addClass('open');
        }).on('mouseleave',
        function() {
          $(this).parents('.dropdown').removeClass('open');
        }
      );
    }

    else if ($(this).width() < 768) {
      $('.dropdown-mobile-toggle').on('click', function() {
        $(this).toggleClass('dropdown-toggle').siblings('.dropdown-menu').toggleClass('shown');
      });

      $('.main-menu .dropdown-menu').off('mouseenter mouseleave');
    }
  });

})(jQuery);