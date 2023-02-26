$(document).ready(function(){
	$("#reset_now").click(function(){
		$('#resetPass_alert').html('<div id="loading" style="text-align:center;background: url(load-2.gif) no-repeat center; background-size:200px 150px;height: 100px;margin-top:10px;margin-bottom:16px;" ><span><b>. . . PLEASE WAIT, IT\'S SENDING RESET LINK . . .</b></span></div>');
		var user_forgot = $("#email_forgot").val();

			var data_forgot= "user_forgot=" + user_forgot;
			
			$.ajax({
				method: "post",
				url: "system/model/forgot_pass.php",
				data: data_forgot,
				success: function(data_forgot)
				{
					$("#resetPass_alert").html(data_forgot);
				}
			});
	});
});