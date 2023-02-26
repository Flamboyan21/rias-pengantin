$(document).ready(function(){
	$( "#register-email-2" ).keyup(function(event) {
		if(event.keyCode == 13){
       		$( "#register-password-2" ).focus();
    	}
	});
	$("#reg_now").click(function(){
		$('#registration_alert').html('<div id="loading" style="text-align:center;background: url(load.gif) no-repeat center; background-size:150px 100px;height: 100px;margin-top:10px;margin-bottom:10px;" ><span>. . . PLEASE WAIT, IT\'S SENDING ACTIVATION MAIL . . .</span></div>');
		var user = $("#register-email-2").val();
		var pass = $("#register-password-2").val();
		if ($('#register-policy-2').is(":checked"))
		{
		  var policy = "agree";
		}else{
			var policy ="disagree";
		}
		$('#register-email-2').keyup(function () {
                $('#reg_now').prop('disabled', false);
            });
            $('#reg_now').prop('disabled', true);
			var data = "user=" + user + "&pass=" + pass + "&policy=" + policy;
			
			$.ajax({
				method: "post",
				url: "system/model/m0d3l0g-up.php",
				data: data,
				success: function(data)
				{
					$("#register-email-2").val("");
					$("#register-password-2").val("");
					$("#registration_alert").html(data);
				}
			});
	});
});