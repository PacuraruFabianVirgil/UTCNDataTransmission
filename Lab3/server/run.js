var api = require('./api.js').app;
var hamming = require('./hamming.js');

api.put('/message', function(request, response) {
  var bits = request.body.bits;
  if ((bits.length == 8) || (bits.length == 13)) {
    var nrOfErrors = Math.floor(Math.random() * 3);
  } else {
    var nrOfErrors = Math.floor(Math.random() * 2);
  }
  if (nrOfErrors == 2) {
    var firstBitToBeDistorted = Math.floor(Math.random() * bits.length);
    bits = distortBit(bits, firstBitToBeDistorted);
    var secondBitToBeDistorted = firstBitToBeDistorted;
    while (secondBitToBeDistorted == firstBitToBeDistorted) {
      secondBitToBeDistorted = Math.floor(Math.random() * bits.length);
    }
    bits = distortBit(bits, secondBitToBeDistorted);
  } else if (nrOfErrors == 1) {
    bits = distortBit(bits, Math.floor(Math.random() * bits.length));
  }

  var decoded = hamming.decode(bits);
  if (decoded.errorCorrected) {
    response.json('One error corrected in message '+bits+', on position: '+decoded.errorPosition);
  } else if (decoded.moreErrors) {
    response.json('Message received with two errors, resend the package');
  } else {
    response.json('Message '+bits+' received without errors');
  }
});

api.listen(3000, function(){
  console.log('CORS-enabled web server is listening on port 3000...');
});

function distortBit(bits, index){
  bits[index] = (bits[index]+1) % 2;
  return bits;
}