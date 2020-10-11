/**
 * @function encryptPhoneNumber should take a phone number and hash it for security and privacy purposes.
 * @param number will always be a string formatted as such '111-223-1123'. Your function should return the first 6 digits as * and only the last 4 shown. Ex:
 * ' 111-223-1123 ' should be ' ***-***-1123 '
 */
function encryptPhoneNumber(number){ //'number' is a parameter
    let newNum = '';
    for (let i = 0; i < number.length; i++) {
        if (i < 7){
            if (number[i] != '-'){
                newNum += '*';
            }else {
                newNum += '-';
            }
            }else {
            newNum += number[i];
        }

    }
    return newNum
}
console.log(encryptPhoneNumber("111-223-1123"));

module.exports = encryptPhoneNumber;
