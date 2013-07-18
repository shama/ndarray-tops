# ndarray-tops

Returns the highest points of a 3d ndarray as a 2d ndarray.

## example

```js
var tops = require('ndarray-tops')
var ndarray = require('ndarray')
var size = 32

var terrain = ndarray(new Int8Array(size * size * size), [size, size, size])

var peaks = tops(terrain)
```

## install

With [npm](https://npmjs.org) do:

```
npm install ndarray-tops
```

Use [browserify](http://browserify.org) to `require('ndarray-tops')`.

## release history
* 0.1.0 - initial release

## license
Copyright (c) 2013 Kyle Robinson Young<br/>
Licensed under the MIT license.
