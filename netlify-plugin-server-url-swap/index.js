const fs = require('fs')

module.exports = {
    onPreBuild: () => {
        console.log('Server URL Swap onPreBuild hook fired')
        console.log(`Grabbing BASE_URL: ${process.env.BASE_URL}`)
        fs.readFileSync('../static/cms/index.html', 'utf8', function(err, data) {
            if (err) {
                return console.log(err)
            }
            let result = data.replace(/string to be replaced/g, 'replacement string')

            fs.writeFileSync('../static/cms/index.html', result, 'utf8', function(err) {
                if (err) return console.log(err)
            })
        })
    }
}