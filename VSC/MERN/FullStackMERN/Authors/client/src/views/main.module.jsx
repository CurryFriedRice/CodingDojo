import react, {useEffect, useState} from 'react'
import axios from 'axios'
//IMPORTING CSS FROM MODULE
// import style from "./main.module.css"

import {Link} from 'react-router-dom'
import myStyle from "./main.module.css"

export default (props) =>{
    const [authors,setAuthors] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
        .then(res => {
            console.log(res.data)   //Logs the data to see if we're even getting it
            let authors = res.data.authors;
            const sortedUsers = authors.sort(function(a, b){
                const nameA = a.name.toUpperCase(); // ignore upper and lowercase
                const nameB = b.name.toUpperCase(); // ignore upper and lowercase
                if (nameA < nameB) return -1; //nameA comes first
                else if (nameA > nameB) return 1; // nameB comes first
                else return 0;  // names must be equal
            });
            setAuthors(sortedUsers)
        })
        .catch(err => console.log(err))
    },[])

    const deleteItem = (e, author_id) =>{
        e.preventDefault()
        axios.delete(`http://localhost:8000/api/authors/${author_id}/delete`)
            .then(data => {
                console.log(data)
                setAuthors(authors.filter(author => author._id !== author_id))
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h3>All Authors</h3>
            <Link to="/authors/new">Add new favorite Author</Link>
            <table className="table">
                {authors.map((author) => {
                    return(
                    <tr key={author._id}> 
                        <td>{author.name}</td> <td><Link to={`/authors/${author._id}/edit`}>EDIT</Link> | <a href="" onClick={(e) => deleteItem(e, author._id)}>DELETE</a></td>
                    </tr>
                    )}
                )}
                
            </table>
        </div>
    )
}
