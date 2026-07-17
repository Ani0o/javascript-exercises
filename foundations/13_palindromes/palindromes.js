const palindromes = function (string) {
    const original = string.toLowerCase().match(/[a-z0-9]/g).join('');
    const reversed = original.split('').reverse().join('');

    return original === reversed;
};

// Do not edit below this line
module.exports = palindromes;
