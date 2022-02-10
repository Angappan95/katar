/**
     * @author : Angappan
     * @function_description : Validate the given variable is Integer
     * @input Params : Number
     * @return : Whether given number is Integer - <boolean>
    **/

export async function isNumber(num) {
    return Number.isNumber(num)
}

/**
     * @author : Angappan
     * @function_description : Validate the given variable is Null
     * @input Params : Number
     * @return : Whether given number is Null - <boolean>
    **/

 export async function isNull(num) {
    return Number.isNull(num)
}
