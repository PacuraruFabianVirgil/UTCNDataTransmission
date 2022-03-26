function decode(bits) {
	if (bits.length == 7) { // 4 bits with one error
		var z4 = parity(bits[3] + bits[4] + bits[5] + bits[6]);
		var z2 = parity(bits[1] + bits[2] + bits[5] + bits[6]);
		var z1 = parity(bits[0] + bits[2] + bits[4] + bits[6]);
		var errorPosition = z1 * 1 + z2 * 2 + z4 * 4;
		if (errorPosition != 0) {
			bits[errorPosition - 1] = parity(bits[errorPosition - 1] + 1);
			return { errorCorrected: true, moreErrors: false, errorPosition: errorPosition - 1, bits: bits };
		} else return { errorCorrected: false, moreErrors: false, errorPosition: errorPosition, bits: bits };
	} else if (bits.length == 8) { // 4 bits with two errors
		var z4 = parity(bits[4] + bits[5] + bits[6] + bits[7]);
		var z2 = parity(bits[2] + bits[3] + bits[6] + bits[7]);
		var z1 = parity(bits[1] + bits[3] + bits[5] + bits[7]);
		var z0 = parity(bits[0] + bits[1] + bits[2] + bits[3] + bits[4] + bits[5] + bits[6] + bits[7]);
		var errorPosition = z1 * 1 + z2 * 2 + z4 * 4;
		if (z0 != 0) {
			bits[errorPosition] = parity(bits[errorPosition] + 1);
			return { errorCorrected: true, moreErrors: false, errorPosition: errorPosition, bits: bits };
		}
		else if (errorPosition != 0) {
			return { errorCorrected: false, moreErrors: true, errorPosition: errorPosition, bits: bits };
		} else return { errorCorrected: false, moreErrors: false, errorPosition: errorPosition, bits: bits };
	} else if (bits.length == 12) { // 8 bits wih one error
		var z8 = parity(bits[7] + bits[8] + bits[9] + bits[10] + bits[11]);
		var z4 = parity(bits[3] + bits[4] + bits[5] + bits[6] + bits[11]);
		var z2 = parity(bits[1] + bits[2] + bits[5] + bits[6] + bits[9] + bits[10]);
		var z1 = parity(bits[0] + bits[2] + bits[4] + bits[6] + bits[8] + bits[10]);
		var errorPosition = z1 * 1 + z2 * 2 + z4 * 4 + z8 * 8;
		if (errorPosition != 0) {
			bits[errorPosition - 1] = parity(bits[errorPosition - 1] + 1);
			return { errorCorrected: true, moreErrors: false, errorPosition: errorPosition - 1, bits: bits };
		} else return { errorCorrected: false, moreErrors: false, errorPosition: errorPosition, bits: bits };
	} else if (bits.length == 13) { // 8 bits with two errors
		var z8 = parity(bits[8] + bits[9] + bits[10] + bits[11] + bits[12]);
		var z4 = parity(bits[4] + bits[5] + bits[6] + bits[7] + bits[12]);
		var z2 = parity(bits[2] + bits[3] + bits[6] + bits[7] + bits[10] + bits[11]);
		var z1 = parity(bits[1] + bits[3] + bits[5] + bits[7] + bits[9] + bits[11]);
		var z0 = parity(bits[0] + bits[1] + bits[2] + bits[3] + bits[4] + bits[5] + bits[6] + bits[7] + bits[8] + bits[9] + bits[10] + bits[11] + bits[12]);
		var errorPosition = z1 * 1 + z2 * 2 + z4 * 4 + z8 * 8;
		if (z0 != 0) {
			bits[errorPosition] = parity(bits[errorPosition] + 1);
		    return { errorCorrected: true, moreErrors: false, errorPosition: errorPosition, bits: bits };
		}
		else if (errorPosition != 0) {
			return { errorCorrected: false, moreErrors: true, errorPosition: errorPosition, bits: bits };
		} else return { errorCorrected: false, moreErrors: false, errorPosition: errorPosition, bits: bits };
	} else console.log("Vector of bits has unusual number of elements");
}

parity = function(number){
	return number % 2;
}

exports.decode = decode;
