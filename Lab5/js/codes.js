function getNRZL(bits) {
    var result = [];
    for (var i = 0; i < bits.length; i++) {
      let symbol = '⚋⚋';
      if (i == 0) {
        if (parseInt(bits[i].value) == 1) symbol = '∣▔▔';
        else if (parseInt(bits[i].value) == 0) symbol = '▁▁';
      }
      else if (parseInt(bits[i].value) == 1 && i > 0 && parseInt(bits[i - 1].value) == 1) symbol = '▔▔';
      else if (parseInt(bits[i].value) == 1 && i > 0 && parseInt(bits[i - 1].value) == 0) symbol = '∣▔▔';
      else if (parseInt(bits[i].value) == 0 && i > 0 && parseInt(bits[i - 1].value) == 0) symbol = '▁▁';
      else if (parseInt(bits[i].value) == 0 && i > 0 && parseInt(bits[i - 1].value) == 1) symbol = '∣▁▁';
        result.push(symbol);
    }
    return result;
}

function getNRZM(bits) {
    var result = [];
    let state = false;
    for (var i = 0; i < bits.length; i++) {
      let symbol = '⚋⚋';
      if (i == 0) {
        if (parseInt(bits[i].value) == 1) {
          symbol = '∣▔▔';
          state = true;
        }
        else if (parseInt(bits[i].value) == 0) symbol = '▁▁';
      }
      else if (parseInt(bits[i].value) == 1 && i > 0  && state == true) {
        symbol = '∣▁▁';
        state = false;
      }
      else if (parseInt(bits[i].value) == 1 && i > 0  && state == false) {
        symbol = '∣▔▔';
        state = true;
      }
      else if (parseInt(bits[i].value) == 0 && i > 0 && state == true) symbol = '▔▔';
      else if (parseInt(bits[i].value) == 0 && i > 0 && state == false) symbol = '▁▁';
        result.push(symbol);
    }
    return result;
}

function getNRZS(bits) {
    var result = [];
    let state = false;
    for (var i = 0; i < bits.length; i++) {
      let symbol = '⚋⚋';
      if (i == 0) {
        if (parseInt(bits[i].value) == 0) {
          symbol = '∣▔▔';
          state = true;
        }
        else if (parseInt(bits[i].value) == 1) symbol = '▁▁';
      }
      else if (parseInt(bits[i].value) == 0 && i > 0  && state == true) {
        symbol = '∣▁▁';
        state = false;
      }
      else if (parseInt(bits[i].value) == 0 && i > 0  && state == false) {
        symbol = '∣▔▔';
        state = true;
      }
      else if (parseInt(bits[i].value) == 1 && i > 0 && state == true) symbol = '▔▔';
      else if (parseInt(bits[i].value) == 1 && i > 0 && state == false) symbol = '▁▁';
        result.push(symbol);
    }
    return result;
}

function getRZ(bits) {
    var result = [];
    for (var i = 0; i < bits.length; i++) {
        let symbol = '⚋⚋';
        if (parseInt(bits[i].value) == 1) symbol = '∣▔∣▁';
        if (parseInt(bits[i].value) == 0) symbol = '▁▁';
        result.push(symbol);
    }
    return result;
}

function getBL(bits) {
    var result = [];
    for (var i = 0; i < bits.length; i++) {
        let symbol = '⚋⚋';
        if (parseInt(bits[i].value) == 1) symbol = '▁∣▔';
      //  AMI = "- 0 _" => - = 1; 0 = 0; _ = -1
        if (parseInt(bits[i].value) == 1 && i > 0 && parseInt(bits[i - 1].value) == 1) symbol = '∣▁∣▔';
        if (parseInt(bits[i].value) == 0) symbol = '▔∣▁';
        if (parseInt(bits[i].value) == 0 && i > 0 && parseInt(bits[i - 1].value) == 0) symbol = '∣▔∣▁';
        result.push(symbol);
    }
    return result;
}

function getBM(bits) {
    var result = [];
    let state = false;
    for (var i = 0; i < bits.length; i++) {
      let symbol = '⚋⚋';
      if (i == 0) {
        if (parseInt(bits[i].value) == 0) {
          symbol = '∣▔▔';
          state = true;
        }
        else if (parseInt(bits[i].value) == 1) symbol = '∣▔∣▁';
      }
      else if (parseInt(bits[i].value) == 0 && i > 0  && state == true) {
        symbol = '∣▁▁';
        state = false;
      }
      else if (parseInt(bits[i].value) == 0 && i > 0  && state == false) {
        symbol = '∣▔▔';
        state = true;
      }
      else if (parseInt(bits[i].value) == 1 && i > 0 && state == true) symbol = '∣▁∣▔';
      else if (parseInt(bits[i].value) == 1 && i > 0 && state == false) symbol = '∣▔∣▁';
        result.push(symbol);
    }
    return result;
}

function getBS(bits) {
    var result = [];
    let state = false;
    for (var i = 0; i < bits.length; i++) {
      let symbol = '⚋⚋';
      if (i == 0) {
        if (parseInt(bits[i].value) == 1) {
          symbol = '∣▔▔';
          state = true;
        }
        else if (parseInt(bits[i].value) == 0) symbol = '∣▔∣▁';
      }
      else if (parseInt(bits[i].value) == 1 && i > 0  && state == true) {
        symbol = '∣▁▁';
        state = false;
      }
      else if (parseInt(bits[i].value) == 1 && i > 0  && state == false) {
        symbol = '∣▔▔';
        state = true;
      }
      else if (parseInt(bits[i].value) == 0 && i > 0 && state == true) symbol = '∣▁∣▔';
      else if (parseInt(bits[i].value) == 0 && i > 0 && state == false) symbol = '∣▔∣▁';
        result.push(symbol);
    }
    return result;
}

function getBLdiff(bits) {
    var result = [];
    let state = false;
    for (var i = 0; i < bits.length; i++) {
      let symbol = '⚋⚋';
      if (i == 0) {
        if (parseInt(bits[i].value) == 1) {
          symbol = '▁∣▔';
          state = true;
        }
        else if (parseInt(bits[i].value) == 0) symbol = '∣▔∣▁';
      }
      else if (parseInt(bits[i].value) == 1 && i > 0  && state == true) {
        symbol = '▔∣▁';
        state = false;
      }
      else if (parseInt(bits[i].value) == 1 && i > 0  && state == false) {
        symbol = '▁∣▔';
        state = true;
      }
      else if (parseInt(bits[i].value) == 0 && i > 0 && state == true) symbol = '∣▁∣▔';
      else if (parseInt(bits[i].value) == 0 && i > 0 && state == false) symbol = '∣▔∣▁';
        result.push(symbol);
    }
    return result;
}

function getDelay(bits) {
    var result = [];
    let state = false;
    let counter = 0;
    for (var i = 0; i < bits.length; i++) {
      let symbol = '⚋⚋';
      if (i == 0) {
        if (parseInt(bits[i].value) == 1) {
          symbol = '▁∣▔';
          state = true;
        }
        else if (parseInt(bits[i].value) == 0) {
          symbol = '▁▁';
          counter++;
        }
      }
      else if (parseInt(bits[i].value) == 1 && i > 0 && state == true) {
        symbol = '▔∣▁';
        state = false;
        counter = 0;
      }
      else if (parseInt(bits[i].value) == 1 && i > 0 && state == false) {
        symbol = '▁∣▔';
        state = true;
        counter = 0;
      }
      else if (counter == 0) {
        if (parseInt(bits[i].value) == 0 && i > 0 && state == true) {
          symbol = '▔▔';
          counter++;
        }
        else if (parseInt(bits[i].value) == 0 && i > 0 && state == false) {
          symbol = '▁▁';
          counter++;
        }
      }
      else if (counter > 0) {
        if (parseInt(bits[i].value) == 0 && i > 0 && state == true) {
          symbol = '∣▁▁';
          counter++;
          state = false;
        }
        else if (parseInt(bits[i].value) == 0 && i > 0 && state == false) {
          symbol = '∣▔▔';
          counter++;
          state = true;
        }
      }
        result.push(symbol);
    }
    return result;
}

//  AMI = "- 0 _" => - = 1; 0 = 0; _ = -1