
function getUsers(){
    fetch('http://localhost:5000/users')
        .then(res =>  res.json())
        .then(data => {
            var users = document.getElementById('users');
            for( let i = 0; i < data.length; i++){
                let row = document.createElement('tr');

                let name = document.createElement('td');
                name.innerHTML = data[i].user_name;
                row.appendChild(name);
                
                let email = document.createElement('td');
                email.innerHTML = data[i].email;
                row.appendChild(email);
                users.appendChild(row);
            }
        })
}
getUsers();





var myForm = document.getElementById("myForm");

myForm.onsubmit = function(e){
    e.preventDefault();
    var form = new FormData(myForm);

    fetch("http://localhost:5000/create/user", {method :'POST', body: form})
        .then( response => response.json())
        .then( data => {
            var users = document.getElementById('users');
            let row = document.createElement('tr');
            let name = document.createElement('td');
            name.innerHTML = data['form']['user_name']
            row.appendChild(name);
            
            let email = document.createElement('td');
            email.innerHTML = data['form']['email']
            row.appendChild(email);
            users.appendChild(row);
        }).then(data => {
            console.log("Gotta clear the form")
            console.log(myForm)
            myForm.reset();
        })
    }
