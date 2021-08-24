# Hi Line

## In order to run the unit tests:



### 1. Install:

1.0. "git clone https://github.com/Dzheky/hi-line.git"  
1.1. Install NPM on your machine - "npm init" (this commands installs node_modules and creates package.json)  
1.2. Install Sinon-Chrome on your machine - "npm install sinon-chrome --save-dev" - "https://stackoverflow.com/questions/2869827/how-to-test-chrome-extensions"  
1.3. Install Mocha on your machine - "npm install --save-dev mocha"  
1.4. Install Chai on your machine - "npm install --save-dev chai"  
1.5. Install JSDOM - "npm install jsdom" - Reference: "https://sparkbox.com/foundry/improve_unit_testing_with_mocha_chai_jsdom"  
1.6. Install Jest - "npm install jest"  
1.7. Add "type": "module" to your package.json file  
1.8. After making any change to your package.json file, run "npm install"  



### 2. Manage file structure and modify package.json:

2.1. Create tests folder at the same level of assets and node-modules  
2.2. Move main.test.js file into tests folder  
2.3. Change "require('./utils.js')" at line 1 in main.test.js into "require('../utils.js')"  
2.4. Download May's hi-line-main_with_testing.zip on slack  
2.5. Copy four files inside tests folder of hi-line-main_with_testing and paste them into your tests folder  
2.6. Add the code below to your package.json file  

"scripts": {  
    "utilsTest": "jest ./tests/main.test.js",  
    "backgroundTests": "mocha ./tests/backgroundUnitTests.js",  
    "highlightTests": "mocha ./tests/highlightListUnitTests.js"  
  },  



### 3. Run the tests by running either of the following commands:

3.1. npm run backgroundTests  
3.2. npm run highlightTests  
3.3. npm run utilsTest  
