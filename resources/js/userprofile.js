$(document).ready(

    function(){

		uid=window.localStorage.getItem('id');
		const data1 = {id:uid}
		$.ajax({


			url: 'http://localhost:3001/v1/myUsers/' +uid,
			method: 'GET',
			contentType:'application/json',
			dataType: 'json',
			// headers : { authorization : 'Bearer'+window.localStorage.getItem('token') },
			success: function(result, status) {
				console.log(result[0].email);
	
				for (var key in result) {
	
					// console.log(result[key].email)
	
				
		  $('#firstname').val(result[key].firstname)
		  $('#lastname').val(result[key].lastname)
		  $('#address').val(result[key].address)
		  $('#email').val(result[key].email)

	
				}
			},
			error: function(jqXHR, status) {
			console.log(jqXHR)
			}
	
	
		})
	
	
	

//update
$('#editUser').submit(function(e) {

 e.preventDefault();


    var edit = {
        firstname : $("#firstname").val(),
        lastname : $("#lastname").val(),
        address:$('#address').val(),
        email : $("#email").val()
        
     
        
    }
console.log(edit);
var uid = window.localStorage.getItem('id');
console.log($(this))

$.ajax({
    url: 'http://localhost:3001/v1/myUsers/' + uid,
    method: 'PUT',
    contentType: 'application/json',
    dataType: 'json',
    data:JSON.stringify(edit),
    success: function(result) {
		console.log(result);
		// console.log(result.email)
		window.location.href = "userprofile.html"
      
     
    },
    error:function(jqXHR){
	console.log(jqXHR)
    }

})
})
})



 