export default function nonUniqueElements(data) {
  var newData = [];
  for (var i = 0; i < data.length; i++){
    var count = 0;
    for (var j = 0; j < data.length; j++){
      if (data[i] == data[j]){
        count++;
      }
    }
    if (count >= 2){
      newData.push(data[i]);
    }
  }
  return newData;
}
