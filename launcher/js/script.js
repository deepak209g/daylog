const { exec } = require('child_process');

var $ = jQuery;
$(document).ready(function () {
	var cmd = $("#spotlight")
	cmd.keypress(function( event ) {
		if ( event.which == 13 ) {
		    // enter pressed
		    event.preventDefault();
		    var val = cmd.val();
			cmd.val('')
		    exec(val, (err, stdout, stderr) => {
			  if (err) {
			    console.error(err);
			    return;
			  }
			  console.log(stdout);
			});
		}
	});
})