const fetchquest = require("fetchquest")
const strip_ansi = require("strip-ansi")

module.exports = function(callback) {
    fetchquest({"url": "stats.json"}).then((stats) => {
        stats.errors.forEach(function(error) {
            (console.error || console.log)(strip_ansi(error))
        })

        stats.warnings.forEach(function(warning) {
            (console.warn || console.log)(strip_ansi(warning))
        })
    })
}
