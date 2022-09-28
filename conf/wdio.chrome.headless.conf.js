const {config} = require("./wdio.conf");
const chromeHeadlessConfig = {
    ...config,
    services: ["selenium-standalone"],
    capabilities: [{
        maxInstances: 2,
        browserName: "chrome",
        'goog:chromeOptions': {
            args: ['--headless', '--start-maximized', '--no-sandbox', '--disable-gpu', '--window-size=1920,1080', '--allow-insecure-localhost']
        },
    }],
    
};
exports.config = chromeHeadlessConfig;