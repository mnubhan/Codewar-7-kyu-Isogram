function isIsogram(str){
  return !str.match(/([a-z]).*\1/i);
}

function isIsogram(str){
  return new Set(str.toUpperCase()).size == str.length;
}
