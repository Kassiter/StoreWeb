jQuery('document').ready(function() {
	jQuery("#plusCount").on("click", function() {
		var a, b;
		a = jQuery('#in1').val();
		b = jQuery('#in2').val();
		a=parseInt(a);
		b=parseInt(b);
		c=a+b;
		jQuery(".layer").append('<span id="res">'+'RESULT: '+'<span id="ress">'+c+'</span>'+'</span>');
	});
	jQuery("#minusCount").on("click", function() {
		var a, b;
		a = jQuery('#in1').val();
		b = jQuery('#in2').val();
		a=parseInt(a);
		b=parseInt(b);
		c=a-b;
		jQuery(".layer").append('<span id="res">'+'RESULT: '+c+'</span>');
	});
	jQuery("#mulCount").on("click", function() {
		var a, b;
		a = jQuery('#in1').val();
		b = jQuery('#in2').val();
		a=parseInt(a);
		b=parseInt(b);
		c=a*b;
		jQuery(".layer").append('<span id="res">'+'RESULT: '+c+'</span>');
	});
	jQuery("#divCount").on("click", function() {
		var a, b,c;
		a = jQuery('#in1').val();
		b = jQuery('#in2').val();
		a=parseInt(a);
		b=parseInt(b);
		c=a/b;
		jQuery(".layer").append('<span id="res">'+'RESULT: '+'<span class="timer count-title count-number" id="res" data-to="'+parseInt(c)+'">'+"</span></span>");
	});
	jQuery("#shCount").on("click", function() {
		jQuery(".layer").append('');
	});
})