function toReadable(number) {
    function getNumber(n) {
        switch (n) {
            case '1':
                return ("one");
            case '2':
                return ("two");
            case '3':
                return ("three");
            case '4':
                return ("four");
            case '5':
                return ("five");
            case '6':
                return ("six");
            case '7':
                return ("seven");
            case '8':
                return ("eight");
            case '9':
                return ("nine");
            case '10':
                return ("ten");
            case '11':
                return ("eleven");
            case '12':
                return ("twelve");
            case '13':
                return ("thirteen");
            case '14':
                return ("fourteen");
            case '15':
                return ("fifteen");
            case '16':
                return ("sixteen");
            case '17':
                return ("seventeen");
            case '18':
                return ("eighteen");
            case '19':
                return ("nineteen");
            case '20':
                return ("twenty");
            case '30':
                return ("thirty");
            case '40':
                return ("forty");
            case '50':
                return ("fifty");
            case '60':
                return ("sixty");
            case '70':
                return ("seventy");
            case '80':
                return ("eighty");
            case '90':
                return ("ninety");
            case '0':
                return ('zero')
            default:
                return '';
        }
    }

    number = String(number)
    const result = []
    if (number.length === 3)
        result.push(getNumber(number[0]), 'hundred')
    if (number.length > 1) {
        let two = number[number.length - 2]
        let three = number[number.length - 1]
        let ty = getNumber(two + three)
        if (ty)
            result.push(ty)
        else {
            ty = getNumber(two + '0')
            if (ty)
                result.push(ty, getNumber(three))
            else if (three !== '0') result.push(getNumber(three))
        }
    }
    if (number.length === 1)
        result.push(getNumber(number[0]))
    return result.join(' ')
}
module.exports = toReadable
