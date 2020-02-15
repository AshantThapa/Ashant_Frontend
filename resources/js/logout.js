   function logout (token,id,firstname,lastname,address,email) {
       

        window.localStorage.removeItem('token')
        window.localStorage.removeItem('id')
        window.localStorage.removeItem('firstname');
		window.localStorage.removeItem('lastname');
        window.localStorage.removeItem('address');
		window.localStorage.removeItem('email');
		
         window.location.href = "./login.html"

         

    }