# statgrab #

Grabs your `stats.json`.

Particularly useful when used with webpack, which has plugins like [stats-webpack-plugin](https://www.npmjs.com/package/stats-webpack-plugin) and [webpack-stats-plugin](https://www.npmjs.com/package/webpack-stats-plugin) for exporting the stats of the build. If `stats.json` includes any `errors` or `warnings`, it will log those to the console.

### Usage ###

```js
var statgrab = require("statgrab")
statgrab(function(stats) {
    console.log(stats)
})
```

or

```js
var statgrab = require("statgrab/do")
```

### License ###

This package is licensed under ISC.
