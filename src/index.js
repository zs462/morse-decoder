const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let res = ''
    let letterEncoded
    
    for (let i = 0; i < expr.length; i += 10) {
        letterEncoded = expr.substr(i, 10)

        let code = ''
        for (let j = 0; j < 10; j += 2) {
            let symbol = letterEncoded.substr(j, 2)
            switch (symbol) {
                case '10':
                    code += '.'
                    break
                case '11':
                    code += '-'
                    break
            }
        }

        if (code !== '' && MORSE_TABLE.hasOwnProperty(code)) {
            res += MORSE_TABLE[code]
        } else if (letterEncoded == '**********') {
            res += ' '
        }
    }

    return res
}

module.exports = {
    decode
}