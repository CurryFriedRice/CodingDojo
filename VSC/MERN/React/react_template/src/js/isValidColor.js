
// const isValidColor = (color) => 
// {
//     if (/^#[0-9a-f]{3}([0-9a-f]{3})?$/i.test(color)) {
//         //Match
//     }else if (/^rgb\s*(\s*[012]?[0-9]{1,2}\s*,\s*[012]?[0-9]{1,2}\s*,\s*[012]?[0-9]{1,2}\s*)$/i.test(str)) {
//         //Match
//     }
//     else{
//         return false;
//     }
// }

const isValidColor = (color) => {
    const s = new Option().style;
    s.color = color;
    return s.color !== '';
  }

export default isValidColor

