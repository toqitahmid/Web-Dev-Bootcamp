// =================   PROBLEM 1   =================
function newPrice(currentPrice, discount) {

  if (typeof(currentPrice) === 'string' || typeof(discount) === 'string') {
    return "Invalid";
  } 
  else {
    if (discount => 0.0 && discount <= 100.0) {

      let afterDiscount = currentPrice - (currentPrice * discount) / 100;
      return afterDiscount.toFixed(3);
    } 
    else {
      return "Invalid";
    }
  }
}


// ====================  PROBLEM 2  =====================
function validOtp(otp){

    if(typeof(otp) === 'number' || typeof(otp) === 'object' || otp == [ ]){
        return "Invalid";
    }
    else if(otp.startsWith("ph-") && otp.length === 8){
        return true;
    }
    else{
        return false;
    }
}


// ===================  PROBLEM 3  =======================
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


// ====================  PROBLEM 4  ======================
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


// ====================  PROBLEM 5  ==================
function analyzeText(str){

    if(typeof(str) === 'number' || typeof(str) === 'object' || str == [] || str === " "){
        return "Invalid";
    }
    else{
        let text = str.split(" ");
        let textLenth = 0;
        let maxText = " ";
        for(let item of text){
            if(textLenth < item.length){
                textLenth = item.length;
                maxText = item;
            }
        }
        let totalChar = 0;
        for(let i = 0; i < str.length; i++){
            if(str[i] !== " "){
                totalChar++;
            }
        }
    
        const tuningText = {
            longwords: maxText,
            token: totalChar
        }
        return tuningText;
    }
} 
