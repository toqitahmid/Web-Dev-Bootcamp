function gonoVote(A){

    if(typeof(A) === 'string' || typeof(A) === 'number'){
        return "Invalid";
    }
    else{
        let haCount = 0;
        let naCount = 0;
    
        for(let item of A){
            if(item === "ha"){
                haCount++;
            }
            else if(item === "na"){
                naCount++;
            }
        }
    
        if(haCount === naCount){
            return "equal";
        }
        else if(haCount > naCount){
            return true;
        }
        else{
            return false;
        }
    }

}