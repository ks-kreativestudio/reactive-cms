const APP_CONFIG = {
    port: 3000,
    mongoDBURI: 'mongodb://172.17.0.2:27017/reactivecms',
    bcryptSaltRounds: 12,
    appSecret: 'iCD5e@rx$3-9rR_QZwIW2Dg-Zn^h&heS', // 32 characters
    staticUploadPath: 'site-static',
    staticUploadPrefix: '/public', // use '/public/' instead of '/site-static/'
    uploadDirectory: 'site-static/uploads/',
    staticFilesPath: 'website/static',
    staticFilesPrefix: '/website',
    sessionMaxAge: 1000 * 60 * 60 * 24 * 3, // 3 days
    ipAddressToListen: '0.0.0.0', // 0.0.0.0 for docker container
    domain: 'localhost', // localhost \ domain.com
    websiteTemplatesPath: './website/view/template/', // change only if edit the structure website directory
}


module.exports = APP_CONFIG
