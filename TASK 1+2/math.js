exports.factorial=(num)=>{
    let counter = num;
    let result = 1;
    while (counter > 1) {
        result*=counter--;
        
    }
    return result;
};
