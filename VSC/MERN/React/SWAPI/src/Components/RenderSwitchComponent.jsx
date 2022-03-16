import React, {useState, useParams} from  'react';
import 
{
  Link,
} from "react-router-dom";

const RenderResult = props => {
    const {category, id} = useParams();

  return (
    <div>
        <p>{category}</p>
        <p>{id}</p>
    </div>
  );
}

export default RenderResult;