const capitalize = (string) => {
    var stringSplit = string.split('')
    stringSplit[0] = stringSplit[0].toUpperCase()
    return stringSplit.join('')
}

export default capitalize