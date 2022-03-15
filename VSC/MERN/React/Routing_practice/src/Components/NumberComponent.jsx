import { useParams } from "react-router";
    
const Number = (props) => {
  const { number } = useParams();
    
  return (
    <h1>Number is { number }!</h1>
  );
}

export default Number