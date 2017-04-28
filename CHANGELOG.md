# Change Log
All notable changes to the "vscode-mocha-test-runner" extension will be documented in this file.

## 0.0.1 - 2017_03_29
- Initial release

## 0.0.2 - 2017_04_19
- Codelens resolved with typescript compiler -  more reliable than regex
- Added setup option for mocha - ability to configure enviroment before mocha starts (Ex: jsdom configuration)
- Added command for running all tests in project

## 0.0.3 - 2017_04_26
- Codelens provider rewriten - shows counts if suceed, failed test on describe
- TestRunner rewriten - no longer spawn child process for tests

## 0.0.4 - 2017_04_28
- Writen Readme.md
- Added output channel for showing mocha output - 'Mocha test runner'
- Added shortcuts for 'run-all' and 'run-file' commands