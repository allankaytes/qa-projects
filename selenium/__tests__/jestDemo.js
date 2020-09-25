const webdriver = require('selenium-webdriver')
const { By } = webdriver
const { createDriver } = require('../testHelpers')

describe('Podverse tests', () => {

    const driver = createDriver()

    afterAll(async () => {
        await driver.quit()
    })

    test('nav to playlists page', async () => {
        await driver.get('https://stage.podverse.fm/')
        let currentUrl = await driver.getCurrentUrl()
        expect(currentUrl).toBe('https://stage.podverse.fm/')

        const podcastsNavButtonText = await driver
            .findElement(By.css('.nav-item a[href="/podcasts"]'))
            .getText();
        expect(podcastsNavButtonText).toBe('Podcasts')

        await driver.findElement(By.css('.dropdown.nav-item .dropdown-toggle.btn.btn-secondary')).click();
        await driver.sleep(2000)
        await driver.findElement(By.css('.dropdown-item[href="/playlists"]')).click();
        await driver.sleep(2000)

        currentUrl = await driver.getCurrentUrl()
        expect(currentUrl).toBe('https://stage.podverse.fm/playlists')
    }, 10000)

    test('nav to profiles page', async () => {
        await driver.get('https://stage.podverse.fm/')
        let currentUrl = await driver.getCurrentUrl()
        expect(currentUrl).toBe('https://stage.podverse.fm/')

        await driver.findElement(By.css('.dropdown.nav-item .dropdown-toggle.btn.btn-secondary')).click();
        await driver.sleep(2000)
        await driver.findElement(By.css('.dropdown-item[href="/profiles"]')).click();
        await driver.sleep(2000)

        currentUrl = await driver.getCurrentUrl()
        expect(currentUrl).toBe('https://stage.podverse.fm/profiles')
    }, 10000)
})
