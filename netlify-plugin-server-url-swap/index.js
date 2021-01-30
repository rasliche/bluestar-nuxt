module.exports = {
    onPreBuild: () => {
        console.log('Server URL Swap onPreBuild hook fired')
        console.log(`Grabbing BASE_URL: ${process.env.BASE_URL}`)
    }
}