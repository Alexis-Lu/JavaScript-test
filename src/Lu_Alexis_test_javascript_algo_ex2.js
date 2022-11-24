function F21(table){ 
    for(let i = 0; i < table.length; i++){
        if(table[i] > 0 < 10){
            for(let j = 0; j < table.length; j++){
                if(i === j){
                    }
                else{
                    if(table[i] === table[j]){
                        return false
                    }
                    else{
                    }
                }
            }
            return true
        }
        else{
            console.log("Number needs to be between 1 and 9");
            return false;
        }
    }
}