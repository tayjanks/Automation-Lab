const {Builder, Capabilities, By} = require ('selenium-webdriver')
require ('chromedriver')
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/movieList/index.html')
})

afterAll (async () => {
    await driver.quit()
})

test ('Add movie', async () =>{
    let addField = await driver.findElement(By.xpath('//input'))
    await addField.sendKeys('Halloween Ends\n')
    const movie = await driver.findElement(By.xpath('//li/span[text()="Halloween Ends"]'))
    expect (await movie.isDisplayed()).toBeTruthy;
    await driver.sleep(3000)
})

test ('Delete movie', async () => {
    let addField = await driver.findElement(By.xpath('//input'))
    await addField.sendKeys('Scream\n')
    const deleteBtn = await driver.findElement (By.id("Scream")).click()
    const movies = await driver.findElement(By.xpath('//li/span[text()]'))
    console.log(movies)
    //expect (await movies.toBe('Scream'.toBeFalsy))
    await driver.sleep(3000)
})

test ('Cross off movie', async () => {
    let addField = await driver.findElement(By.xpath('//input'))
    await addField.sendKeys('Scary Movie 2\n')
    const movie = await driver.findElement(By.xpath('//li/span[text()="Scary Movie 2"]')).click()

    await driver.sleep(3000)
})