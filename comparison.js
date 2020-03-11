function strictEqual(var1, var2) {
    if ( (var1 == var2) && (typeof var1 == typeof var2) ) {
        return true 
    } 

    return false
}

module.exports = strictEqual