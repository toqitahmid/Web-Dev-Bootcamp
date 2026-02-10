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
