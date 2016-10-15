var microajax = require("microajax")
var strip_ansi = require("strip-ansi")

module.exports = function(callback) {
    microajax("stats.json", function(response) {
        if(!!response && response.status == 200) {
            var stats = JSON.parse(response.responseText)

            stats.errors.forEach(function(error) {
                (console.error || console.log)(strip_ansi(error))
            })

            stats.warnings.forEach(function(warning) {
                (console.warn || console.log)(strip_ansi(warning))
            })

            if(callback != undefined) {
                callback(stats)
            }
        }
    })
}
