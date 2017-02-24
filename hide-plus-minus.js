$x = $(".blob-code-inner");

$x.each(function(index, value) {
  $(this).addClass( "foo" );
	var val = $(this).html();
	$(this).html(val.substring(1));
	$(this).prepend(" ");
});
