// const puppeteer = require('puppeteer');
import puppeteer from 'puppeteer';

let page;
let myBrowser;

describe('Test Login', () => {
  beforeAll(async () => {
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    myBrowser = browser;
  });

  beforeEach(async () => {
    page = await myBrowser.newPage();
    await page.goto('http://localhost:3000');
  })

  afterEach(async () => {
    await page.close();
  })
  afterAll(async () => {
    await myBrowser.close();
  });

  test('See header Waza admin', async () => {
    const text = await page.$eval('h1', el => el.innerHTML);
    expect(text).toEqual('Waza internal admin');
  });

  test('See header Waza admin', async () => {
    const text = await page.$eval('h3', el => el.innerHTML);
    expect(text).toEqual('Login');
  });

  test('See header Waza admin', async () => {
    const text = await page.$eval('span.MuiButton-label', el => el.innerHTML);
    expect(text).toEqual('Sign in');
  });

  test('click submit without typing', async () => {
    await page.click('button[type=submit]');
    await page.waitFor('#errorId');
    const text = await page.$eval('#errorId', el => el.innerHTML);
    expect(text).toEqual('Email is required');
  });

  test('click submit invalid id and password', async () => {
    await page.type('input[name=id]', 'somerandomstring@gmail.com');
    await page.type('#password', 'thisisapassword');
    await page.click('button[type=submit]');
    await page.waitFor('#errorId');
    await page.waitFor('#error');
    const textId = await page.$eval('#errorId', el => el.innerHTML);
    const text = await page.$eval('#error', el => el.innerHTML);
    expect(textId).toEqual('Invalid Email or password');
    expect(text).toEqual('Invalid Email or password');
  });

  test('click submit valid id and password', async () => {
    await page.type('input[name=id]', 'root@waza.com');
    await page.type('#password', 'Waza@2019');
    await page.click('button[type=submit]');
    const text = await page.$eval('h3.page-title', el => el.innerHTML);
    expect(text).toEqual('Dashboard');
  });
});
