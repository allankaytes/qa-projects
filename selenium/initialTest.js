const webdriver = require('selenium-webdriver')
const chrome = require('selenium-webdriver/chrome')
const {Builder, By, Capabilities, Key, until} = webdriver

let chromeOptions = new chrome.Options()
let driver = new Builder()
 .withCapabilities(Capabilities.chrome())
 .usingServer('http://localhost:4444/wd/hub')
 .setChromeOptions(chromeOptions)
 .build()

 async function runTest () {
    await driver.get('https://stage.podverse.fm/');
    // await browser.findElement(webdriver.By.name('q')).sendKeys('allan', Key.RETURN);
    // await browser.wait(until.titleIs('allan - Google Search'), 1000);
    // const title = await browser.getTitle();
    // console.log('title', title)
    // await browser.findElement(By.css("input[type='submit']")).click();

    let currentUrl = await driver.getCurrentUrl();
    console.log('currentUrl test:', currentUrl, currentUrl === 'https://stage.podverse.fm/')
    
    await driver.findElement(By.css('.dropdown.nav-item .dropdown-toggle.btn.btn-secondary')).click();
    await driver.sleep(2000)
    await driver.findElement(By.css('.dropdown-item[href="/playlists"]')).click();
    await driver.sleep(2000)
    currentUrl = await driver.getCurrentUrl();
    console.log('playlist currentUrl test:', currentUrl, currentUrl === 'https://stage.podverse.fm/playlists')

    await driver.navigate().back();
    await driver.sleep(2000)

    currentUrl = await driver.getCurrentUrl();
    console.log('back function currentUrl test:', currentUrl, currentUrl === 'https://stage.podverse.fm/')

    await driver.navigate().forward();
    await driver.sleep(2000)

    currentUrl = await driver.getCurrentUrl();
    console.log('forward function currentUrl test:', currentUrl, currentUrl === 'https://stage.podverse.fm/playlists')
    
    await driver.navigate().refresh();
    await driver.sleep(2000)

    currentUrl = await driver.getCurrentUrl();
    console.log('refresh function currentUrl test:', currentUrl, currentUrl === 'https://stage.podverse.fm/playlists')

    const title = await driver.getTitle();
    console.log('title', title)

    const windowHandle = await driver.getWindowHandle();
    console.log('window handle', windowHandle)

    // Opens a new tab and switches to new tab
    await driver.switchTo().newWindow('tab');
    await driver.sleep(2000)

    // Opens a new window and switches to new window
    await driver.switchTo().newWindow('window');
    await driver.sleep(2000)
    
    //Close the tab or window
    await driver.close();
    await driver.sleep(2000)

    driver.quit();
}

runTest()