var dtype = require('dtype')
var ndarray = require('ndarray')
var isnd = require('isndarray')

module.exports = function(arr, shape) {
  if (!isnd(arr)) {
    shape = shape || [arr.length / 2, arr.length / 2]
    arr = ndarray(arr, shape)
  }
  var tops = ndarray(new (dtype(arr.dtype))(arr.shape[0] * arr.shape[2]), [arr.shape[0], arr.shape[2]])
  for (var h = 0; h < arr.shape[0]; ++h) {
    for (var x = 0; x < arr.shape[1]; ++x) {
      for (var y = 0; y < arr.shape[2]; ++y) {
        var val = arr.get(x, h, y)
        if (val < 1) continue
        if (h > tops.get(x, y)) tops.set(y, x, h)
      }
    }
  }
  return tops
}
