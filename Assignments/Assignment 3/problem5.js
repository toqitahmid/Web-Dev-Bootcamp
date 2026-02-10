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
