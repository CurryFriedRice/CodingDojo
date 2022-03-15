function tossCoin() {
        return Math.random() > 0.5 ? "heads" : "tails";
    }
    

function fiveHeadsSync() {
        let headsCount = 0;
        let attempts = 0;
        while(headsCount < 5) {
            attempts++;
            let result = tossCoin();
            console.log(`${result} was flipped`);
            if(result === "heads") {
                headsCount++;
            } else {
                headsCount = 0;
            }
        }
        return `It took ${attempts} tries to flip five "heads"`;
    }
console.log( fiveHeadsSync() );
console.log( "This is run after the fiveHeadsSync function completes" );


function fiveHeads() {
        return new Promise( (resolve, reject) => {
        let attempt = 0;
        let headsCount = 0;
        while(attempt < 100){
            attempt++;
            let result = tossCoin();
            if(headsCount == 5) {resolve(`Woo it only took ${attempt} flips before I got 5 in a row`);}
            if(result === "heads") headsCount++;
            else{headsCount = 0}
        }
        reject("I've flipped 100 coins I don't think it's possible...");
        });
    }

fiveHeads()
    .then( res => console.log(res) )
    .catch( err => console.log(err) );
console.log( "When does this run now?" );
