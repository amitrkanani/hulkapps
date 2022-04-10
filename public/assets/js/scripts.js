// ISHWAR'S JS
$(document).ready(function() {

	$('.select2').select2().init();

	var date = new Date();
	var today = new Date(date.getFullYear(), date.getMonth(), date.getDate());

	$('.datepicker').datepicker({
	    format: "yyyy-mm-dd",
	    todayHighlight: true,
	    orientation: 'bottom',
	    autoclose: true
	});
	$('.datepicker').datepicker('setDate', today);
});

function showMyToast($type , $message) {
    bootoast.toast({ message: $message, type: $type, position: 'bottom-center' });
}

function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}