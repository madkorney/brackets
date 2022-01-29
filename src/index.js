module.exports = function check(str, bracketsConfig) {
 
  function removeBrackets(str, bracketsConfig) {
    function createRegex(arr) {
      //arr.lenth = 2 by def
      const requireScreen= '[/^$.|?*+({'; //and slash
      let regex = new RegExp();
      if (requireScreen.includes(arr[0])) {
        regex = RegExp('\\' + arr.join('\\'),'g');
      } else {
        regex = RegExp(arr.join(''),'g'); // no screen
      }
      return regex;
    }

    let counter = 0;
    for (let i = 0; i < bracketsConfig.length; i++) {
      let regexBrackets = createRegex(bracketsConfig[i]);
      while ((str != str.replace(regexBrackets,'')) && (str != '')) {
        str = str.replace(regexBrackets,'');
        counter++;
      }
    }
    if (str == '') {
      return str;
    }
    if (counter == 0) {
        return str;
    } 
    else {
            str = removeBrackets(str, bracketsConfig);
    }
    return str;
  }


  let fitsBracketConfig = false;

  if (str.length % 2 != 0) {
    return fitsBracketConfig; // if length is odd - it cant be a sequence of pairs
  }
  fitsBracketConfig = removeBrackets(str, bracketsConfig) == ''; 
  return fitsBracketConfig;
}


