function finalScore(omr){

    let totalQuestion = omr.right+omr.wrong+omr.skip;
    if(totalQuestion === 100){
        let estimateScore = (omr.right - (omr.wrong*0.5) + (omr.skip*0));
        return Math.round(estimateScore);
    }
    else if(typeof(omr) === 'string' || omr == []){
        return "Invalid";
    }
    else{
        return "Invalid";
    }
}
