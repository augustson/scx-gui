$('#button1').click(function() {
	var name = $('#input1').val();
	var req;
	if (name.length > 0) {
		req = $.get('https://powerful-earth-5718.herokuapp.com/api/hello-world', {
			'name' : name
		});
	} else {
		req = $.get('https://powerful-earth-5718.herokuapp.com/api/hello-world');
	}
	req.done(function(data) {
		$('#greeting').html(data.content);
	}).fail(function(jqXHR, textStatus, errorThrown) {
		$('#greeting').html("Noe gikk feil: " + textStatus + " " + errorThrown)
	});
	return false; // prevent default
});

$("#hider").click(function(event) {
	event.preventDefault();
	$("#col2").hide(1000);
});

$("#shower").click(function(event) {
	event.preventDefault();
	$("#col2").show(1000);
});