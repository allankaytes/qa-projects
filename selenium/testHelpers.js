const webdriver = require('selenium-webdriver')
const chrome = require('selenium-webdriver/chrome')
const {Builder, Capabilities } = webdriver

const createDriver = () => {
    let chromeOptions = new chrome.Options()
    return new Builder()
     .withCapabilities(Capabilities.chrome())
     .usingServer('http://localhost:4444/wd/hub')
     .setChromeOptions(chromeOptions)
     .build()
}

module.exports = {
    createDriver
}
