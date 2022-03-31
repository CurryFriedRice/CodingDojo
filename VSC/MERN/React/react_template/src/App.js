import React, {useState, createContext}from 'react';
import Wrapper from './Components/Wrapper'
import NavBar from './Components/NavBar'
import FormWrapper from './Components/FormWrapper';

export default function App() {
  const [username, setUsername] = useState('Blah')

  return (
    <Wrapper>
      <NavBar/>
      <FormWrapper/>
    </Wrapper>
  )
}



// function User() {
//   return (
//     <UserContext.Consumer>
//       {value => <h1>{value}</h1>} 
//       {/* prints: Reed */}
//     </UserContext.Consumer>
//   )
// }