console.log(vamoLa([1,4,9,4],8));

function vamoLa(vector, sum){
    var posLow = 0;
    var posHigh = vector.length-1;
    while(posHigh != posLow){
        if((vector[posHigh]+vector[posLow])<sum){
            posLow = posLow + 1;
            console.log('+1 posHigh');
        }
        if((vector[posHigh]+vector[posLow])>sum){
            posHigh = posHigh - 1;
            console.log('-1 posHigh');
        }
        if((vector[posHigh]+vector[posLow])==sum){
            console.log('Existe igual');
            return true;
        }
    }
}
