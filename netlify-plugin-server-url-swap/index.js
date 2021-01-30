const fs = require('fs')

module.exports = {
    onPreBuild: () => {
        const filename = '/static/cms/index.html'
        const serverUrlRegex = /(?<=SERVER_URL = ).*$/g
        const replacementServerUrl = process.env.BASE_URL

        console.log('Server URL Swap onPreBuild hook fired')
        console.log(`Grabbing BASE_URL: ${process.env.BASE_URL}`)
        fs.readFileSync(filename, 'utf8', function(err, data) {
            if (err) {
                return console.log(err)
            }
            let result = data.replace(serverUrlRegex, replacementServerUrl)

            fs.writeFileSync(filename, result, 'utf8', function(err) {
                if (err) return console.log(err)
            })
        })
    }
}