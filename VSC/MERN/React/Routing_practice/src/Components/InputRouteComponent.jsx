import { useParams } from "react-router";
    
const InputRoute = (props) => {
  const { input ,bgColor, textColor} = useParams();

  const routeStyle = 
  {
    background:bgColor,
    color:textColor
  }
  return (
    <h1 style={routeStyle}>
    {
      isNaN(parseInt(input))? `The Word is: ${input}` : `The Number is: ${input}`
    }
    </h1>
    
  );
}

export default InputRoute