function morseEncoding(string) {
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
		' ':  ' ',
	}; 
	return MORSE_TABLE[string];
}
function decode(expr) {
	// 1) Получаем массив из полученных данных(10 цифр === одна буква)
	let arrayOfEncodedWord = [];
	for (let i = 0; i < expr.length; i = i + 10) {
		arrayOfEncodedWord.push( expr.slice(i, i + 10) )
	}

	// 2.1) Преобразуем массив из цифр (0, 1 и ****) в символы (. и -)
	let arrayTransform = [];
	for (let i of arrayOfEncodedWord) {
		arrayTransform.push( encoding(i) )
	}
	// 2.2) Сама функция для преобразования из цифр (0, 1 и ****) в символы (. и -)
	function encoding(string) {
		let symbols = "";
		for (let i = 0; i < string.length; i += 2) {
			if ( string.slice(i, i + 2) == "**" ) {
				return " ";
			} else if ( string.slice(i, i + 2) == "10" ) {
				symbols += ".";
			} else if ( string.slice(i, i + 2) == "11" ) {
				symbols += "-";
			}
		}
		return symbols;
	}

	// 3) Преобразование в буквы
	let result = "";
	for (let i of arrayTransform) {
		result = result + morseEncoding(i);
	}

	return result;
}

module.exports = {
    decode
}