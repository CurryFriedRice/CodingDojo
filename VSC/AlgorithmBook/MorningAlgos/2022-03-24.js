/*
  Given an array of ailments (illnesses), and an array of medication objects that have a nested array of treatedSymptoms
  return the medication name(s) that treats the most given symptoms
*/

const medications = [
    {
        name: "Sulforaphane",
        treatableSymptoms: [
            "dementia",
            "alzheimer's",
            "inflammation",
            "neuropathy",
        ],
    },
    {
        
        name: "Longvida Curcumin",
        treatableSymptoms: [
            "pain",
            "inflammation",
            "depression",
            "arthritis",
            "anxiety",
        ],
    },
    {
        name: "Hericium erinaceus",
        treatableSymptoms: [
            "anxiety",
            "cognitive decline",
            "depression"],
    },
    {
        name: "Nicotinamide mononucleotide",
        treatableSymptoms: [
            "ageing",
            "low NAD",
            "obesity",
            "mitochondrial myopathy",
            "diabetes",
        ],
    },
    {
        name: "PainAssassinator",
        treatableSymptoms: [
            "pain",
            "inflammation",
            "cramps",
            "headache",
            "toothache",
            "back pain",
            "fever",
        ],
    },
];


/*
Input: ["pain"], medications
Output: ["PainAssassinator", "Longvida Curcumin"]
*/

/*
Input: ["pain", "inflammation", "depression"], medications
Output: ["Longvida Curcumin"]
*/

/*
Input: ["existential dread"], medications
Output: []
*/

// HINTS:
// Loop through first array to check the medicine
// then loop through second array to see if the symptoms match the inputted symptoms
// if they match add them into a new array at the end return array
// edge case if no matches return null
function webMD(ailments, meds) 
{
    //Anthony Do's Script
    let maxSymptoms = 1;        //We want to treat at least 1 symptom
    let mostEffective = []      //Create a List to hold most effective meds
    for(const pills of meds){   //Loop through all the medications
        let currentSymptoms= 0; //Always set the current matching symptoms to 0
        //Filter out the matching symptoms and get the mathcing symptoms
        currentSymptoms =  pills.treatableSymptoms.filter(symptom => ailments.indexOf(symptom) !== -1).length;
        // console.log(currentSymptoms)
        // for(const ails of ailments)
        // {
        //     if(pills.treatableSymptoms.indexOf(ails) >= 0)
        //         currentSymptoms++;
        //     // console.log(ails)
        // }
        //the current Symptoms exceed our max symptoms then we clear our old array with the new one
        if(maxSymptoms < currentSymptoms){
            mostEffective = [pills.name]
            maxSymptoms = currentSymptoms;  //SET the max to the new current
        }else if(maxSymptoms===currentSymptoms){
            mostEffective.push(pills.name)  //If it's equal also push it
        }else
        {
            // console.log(pills.name," is not effective enough")
        }
        // maxSymptoms = Math.max(maxSymptoms,currentSymptoms)
        // console.log("CURRENT", currentSymptoms)
        // console.log("MAX", maxSymptoms)
    }
    return mostEffective

}

console.log(webMD(["pain"], medications));
console.log(webMD(["pain", "inflammation", "depression"], medications));
console.log(webMD(["existential dread"], medications));

