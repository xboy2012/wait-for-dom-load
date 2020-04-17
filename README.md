# wait-for-dom-load

A handy module that help you put some logic just after the page load.

## install

```
npm i wait-for-dom-load
```

## Usage

```javascript
import waitForDomLoad from 'wait-for-dom-load'
 
waitForDomLoad(() => {
  // SOMETHING AFTER PAGE LOAD
})
```

```javascript

import { waitForDomLoadAsPromise } from 'wait-for-dom-load'

waitForDomLoadAsPromise().then(() => {
    // SOMETHING AFTER PAGE LOAD
})

```

> You don't need to care about whether the page is loaded or not. It just works whenever you call it as you desire.

## Considerations

Someone may ask: Why not use `.addEventListener('load', fn)` or `.onload = fn`?

The answer is quite simple: You must put `.addEventListener('load', fn)` or `.onload = fn` before page is already loaded. **OTHERWISE YOU WILL NEVER GET YOUR CALLBACK INVOKED**.

To work around this situation, you must handle the edge case when the page is already loaded. Well, it's not that difficult. But you have to write several codes which are so boring, and cannot be reused easily.

That's why this module was invented.

You don't have to waste time considering so much details, but just use the API to get your callback invoked immediately after page load, whenever you use it. So simple, isn't it ? 

## Design

You can peek into the source code.

+ We use a dynamic assigned function to avoid any unnecessary condition statement, which results in the fasted runtime performance.
+ The whole module is side-effect free. Therefore, it can be safely optimized by `treeshaking`/`uglify` to output the smallest bundle size as possible.
+ Both `cjs`/`esModule` format is provided. You will benefit from `esModule` if you are using `Webpack`/`rollup` with correct configuration.
 
