export default function convertBytesToHuman(bytes) { 
     if ((typeof bytes == "number") && (bytes >= 0)){
      if (bytes < 1024){
        var bytes2 = bytes + " байт";
      }
      else{
        var bytes1 = bytes/1024;
        var T = bytes1;
        if (bytes1 < 1024){
          var bytes2 = bytes1.toFixed(2) +" Кб";
        }
        else{
          var bytes1 = T/1024;
          var T = bytes1;
          if (bytes1 < 1024){
            var bytes2 = bytes1.toFixed(2) + " Гб";
          }
          else{
            var bytes1 = T/1024;
            var T = bytes1;
            if (bytes1 < 1024){
              var bytes2 = bytes1.toFixed(2) + " Мб";
            }
            else{
              var bytes1 = T/1024;
              var bytes2 = bytes1.toFixed(2) + " Тб";
            }
          }
        }
      }
    }
    else{
      var bytes2 = 'false';
    }
    return bytes2;
  }
