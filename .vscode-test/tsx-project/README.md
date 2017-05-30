# tsx-project

React + Typescript tests using mocha, expect and expect-jsx.

Pripertiels "mocha.sourceDir",  "mocha.outputDir" in .vscode/settings.json must be specified.

 **NOTE:** To get this example to work u need to create **node_modules/@types/expect-jsx/index.d.ts** file with this content: (package @types/expect-jsx is not in npm and i dont know how to put it in there ...)


```ts
import * as expect from 'expect';

declare module 'expect' {
    type JsxElement = JSX.Element | JSX.ElementClass

    interface Expectation<T> {
        toEqualJSX(element: T): this;
        toNotEqualJSX(element: T): this;
        toIncludeJSX(element: T): this;
        toNotIncludeJSX(element: T): this;
    }
}

declare var expectJSX: expect.Extension;

export default expectJSX;
```