window.clone = function (arr) {
  var a = new Array();
  for (var property in arr) {
    a[property] = typeof (arr[property]) == 'object' ? window.clone(arr[property]) : arr[property]}
  return a
}

/*
Object.prototype.clone = function () {
  var o = new Object();
  for (var property in this) {
    o[property] = typeof (this[property]) == 'object' ? this[property].clone() : this[property]}
  return o
}*/
