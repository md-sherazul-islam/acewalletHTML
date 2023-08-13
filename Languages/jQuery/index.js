jQuery(document).ready(function() {
    jQuery('#menu-icon').on('click', function() {
      jQuery('.navbar').toggleClass('expand');
      return false;
    });
  });