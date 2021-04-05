module.exports = {
    lintOnSave: process.env.NODE_ENV !== 'production',
    devServer: {
        port:3060,
        overlay: {
            warnings: true,
            errors: true
        }
    }
}