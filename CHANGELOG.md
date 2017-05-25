## 0.0.19 - 2017_05_25
- Fixed bug: mocha now search correctly in rootPath and not in entire project.
- Fixed bug: missing stdout in output if error occurs.

## 0.0.18 - 2017_05_09
- Added support for tests writen in arrow functions.

## 0.0.16 - 2017_05_04
- Fixed bug: Tests end up in failed state now, if transpiled file doesnt exists.

## 0.0.14 - 2017_05_03
- Fixed bug: Unhandled exception when starting mocha in typescript code, that cannot be successfully compiled.

## 0.0.7 - 2017_05_02
- Added ability to run single test in debug mode.

## 0.0.5 - 2017_04_29
- Added error handling.

## 0.0.4 - 2017_04_28
- Writen Readme.md.
- Added output channel for showing mocha output - 'Mocha test runner'.
- Added shortcuts for 'run-all' and 'run-file' commands.
- First published version.

## 0.0.3 - 2017_04_26
- Codelens provider rewriten - shows counts if suceed, failed test on describe.
- TestRunner rewriten - no longer spawn child process for tests.

## 0.0.2 - 2017_04_19
- Codelens resolved with typescript compiler -  more reliable than regex.
- Added setup option for mocha - ability to configure enviroment before mocha starts (Ex: jsdom configuration).
- Added command for running all tests in project.

## 0.0.1 - 2017_03_29
- Initial release.
