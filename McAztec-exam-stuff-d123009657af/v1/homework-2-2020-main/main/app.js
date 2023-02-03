function addTokens(input, tokens){
    if(typeof(input)!="string") throw Error(`Invalid input`)
    if(input.length < 6) throw Error(`Input should have at least 6 characters`)
    let result = true;
    if(!Array.isArray(tokens)) {
        result = false;
    } else {
        tokens.forEach(token => {
            if(typeof token.tokenName != 'string') {
                result = false;
            }
        });
    }
    if(result === false) throw Error(`Invalid array format`)
    //input.replace(/.../g, JSON.stringify(tokens.tokenName)) 
    return input
}

const app = {
    addTokens: addTokens
}

module.exports = app;