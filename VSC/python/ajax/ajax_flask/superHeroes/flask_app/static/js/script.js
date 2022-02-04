function search(e){
    e.preventDefault();
    var searchForm = document.getElementById('searchForm')
    var form = new FormData(searchForm);
    fetch('http://localhost:5000/search',{method:'POST',body:form})
        .then(res => res.json() )
        .then( data => {
            console.log(data)
            let retHTML = ``
            for (const item in data['results'])
            {
                retHTML += `
                    <div class='m-2'>
                        <img src=${data['results'][item]['image']['url']}>
                        <h1>${data['results'][item]['name']}</h1>
                    </div>
                `
            }
            document.querySelector("#searchOutput").innerHTML = retHTML
        } )
}