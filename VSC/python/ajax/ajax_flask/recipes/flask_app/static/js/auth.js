var newUserForm = document.querySelector("#newUserForm")
var loginForm = document.querySelector("#loginForm")


newUserForm.onsubmit = function(e){
    e.preventDefault();
    var form = new FormData(newUserForm);
   
    fetch("http://localhost:5000/account/create", {method :'POST', body: form})
        .then( response => response.json())
        .then( data => console.log(data))
}


console.log("Jello World!")