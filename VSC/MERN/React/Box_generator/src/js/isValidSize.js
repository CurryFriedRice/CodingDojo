
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

/**
 * 
 * @param {number} size 
 * @returns 
 */
const isValidSize = (size) => {
    if(size== '' || size == null || size==undefined) return false
    console.log(size=='')
    let Regex = new RegExp('^[0-9]*$');
    console.log("REGEX:"+Regex.test(size))
    return Regex.test(size);
}

export default isValidSize

