## Description 
This is webdriverIO project for testing telnyx.com (ver 1.0).

Documentation for project (test cases) is located in the root directory in the "Docs" folder.
## Setup
1. Before using this project, you need to download and install:
- [last version of VS Code](https://code.visualstudio.com/) or any other IDE (for your choice);
- [at least Node.js 14](https://nodejs.org/uk/download/).
2. Clone git repository:
``` console
git clone https://github.com/Burulina/WebdriverIO_telnyx_project.git
```
- and install node modules:
``` console
npm install
```
## Steps to run
1. To run tests manually on local machine with command line:
- all tests on google Chrome:
``` console
npm run allTestsChromeHeadless
```
- one test on google Chrome:
``` console
npm run oneTest_ChromeHeadless {add spec.name to run}
```
- all tests on Firefox:
``` console
npm run allTestsFirefoxHeadless
```
- one test on Firefox:
``` console
npm run oneTest_FirefoxHeadless {add spec.name to run}
```
2. To generate and open HTML report after tests execution:
``` console
npm run allure-generate
```
``` console
npm run allure-open
```