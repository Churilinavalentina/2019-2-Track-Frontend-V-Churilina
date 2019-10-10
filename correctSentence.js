export default function correctSentence(text) {
  var d = text.length-1;
  if (text.charAt(d) != "."){
    var text1 = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase() + ".";
  }
  else{
    var text1 = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  }
  return text1;
}
